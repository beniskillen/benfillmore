import React, { useEffect, useMemo, useState } from 'react';
import { ClipboardCopy, Pencil, RotateCcw, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const MODE_KEY = 'fillmore-copy-edit-mode';
const EDITS_KEY = 'fillmore-copy-edits-v1';
const STYLE_ID = 'fillmore-copy-edit-styles';
const EDITABLE_SELECTOR = [
  'main h1',
  'main h2',
  'main h3',
  'main h4',
  'main h5',
  'main h6',
  'main p',
  'main li',
  'main span',
  'main a',
  'main button',
].join(',');

const readEdits = () => {
  try {
    return JSON.parse(window.localStorage.getItem(EDITS_KEY) || '{}');
  } catch {
    return {};
  }
};

const writeEdits = (edits) => {
  window.localStorage.setItem(EDITS_KEY, JSON.stringify(edits));
};

const textValue = (element) => element.innerText.replace(/\u00a0/g, ' ').trim();

const canEditElement = (element) => {
  if (!element || element.closest('[data-copy-editor]')) return false;
  if (element.children.length > 0) return false;
  if (element.closest('[aria-hidden="true"]')) return false;
  return textValue(element).length > 0;
};

const getEditableElements = () =>
  Array.from(document.querySelectorAll(EDITABLE_SELECTOR)).filter(canEditElement);

const makeEditKey = (element, pathname) => {
  const elements = getEditableElements();
  const index = elements.indexOf(element);
  return `${pathname}:${element.tagName.toLowerCase()}:${index}`;
};

const ensureStyles = () => {
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    [data-copy-editable="true"] {
      cursor: text;
      outline: 0 solid transparent;
      outline-offset: 5px;
      transition: outline-color 140ms ease, background-color 140ms ease, box-shadow 140ms ease;
    }

    [data-copy-editable="true"]:hover {
      outline: 2px dashed rgba(150, 22, 33, 0.48);
      background-color: rgba(233, 255, 128, 0.18);
    }

    [data-copy-editable="true"]:focus {
      outline: 3px solid #E9FF80;
      background-color: rgba(255, 255, 255, 0.92);
      box-shadow: 0 0 0 5px rgba(150, 22, 33, 0.2);
    }

    [data-copy-editing="true"] a,
    [data-copy-editing="true"] button {
      cursor: text;
    }
  `;
  document.head.appendChild(style);
};

const cleanupEditableState = () => {
  document.querySelectorAll('[data-copy-editable="true"]').forEach((element) => {
    element.removeAttribute('contenteditable');
    element.removeAttribute('spellcheck');
    element.removeAttribute('data-copy-editable');
    element.removeAttribute('data-copy-original');
    element.removeAttribute('data-copy-key');
  });
  document.body.removeAttribute('data-copy-editing');
};

export default function CopyEditPreview() {
  const location = useLocation();
  const devPreview = import.meta.env.DEV;
  const enabledFromUrl = useMemo(
    () => new URLSearchParams(location.search).has('copyedit'),
    [location.search]
  );
  const [enabled, setEnabled] = useState(() => {
    if (!devPreview) return false;
    return enabledFromUrl || window.localStorage.getItem(MODE_KEY) === 'true';
  });
  const [changeCount, setChangeCount] = useState(() =>
    devPreview ? Object.keys(readEdits()).length : 0
  );
  const pathname = location.pathname;

  useEffect(() => {
    if (!devPreview) return;
    if (!enabledFromUrl) return;

    window.localStorage.setItem(MODE_KEY, 'true');
    setEnabled(true);
  }, [devPreview, enabledFromUrl]);

  useEffect(() => {
    if (!devPreview || !enabled) {
      cleanupEditableState();
      return undefined;
    }

    let frame = 0;
    const updateCount = () => setChangeCount(Object.keys(readEdits()).length);

    const prepare = () => {
      ensureStyles();
      document.body.setAttribute('data-copy-editing', 'true');

      const edits = readEdits();
      getEditableElements().forEach((element) => {
        const key = makeEditKey(element, pathname);
        const original = element.dataset.copyOriginal || textValue(element);

        element.dataset.copyEditable = 'true';
        element.dataset.copyOriginal = original;
        element.dataset.copyKey = key;
        element.setAttribute('contenteditable', 'plaintext-only');
        element.setAttribute('spellcheck', 'true');

        if (edits[key] && textValue(element) !== edits[key].edited) {
          element.textContent = edits[key].edited;
        }
      });

      updateCount();
    };

    const schedulePrepare = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(prepare);
    };

    const saveElement = (element) => {
      const key = element.dataset.copyKey || makeEditKey(element, pathname);
      const original = element.dataset.copyOriginal || '';
      const edited = textValue(element);
      const edits = readEdits();

      if (edited && edited !== original) {
        edits[key] = {
          path: pathname,
          tag: element.tagName.toLowerCase(),
          original,
          edited,
        };
      } else {
        delete edits[key];
      }

      writeEdits(edits);
      updateCount();
    };

    const handleClick = (event) => {
      const editable = event.target.closest('[data-copy-editable="true"]');
      if (!editable) return;

      if (editable.closest('a, button')) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const handleInput = (event) => {
      const editable = event.target.closest('[data-copy-editable="true"]');
      if (editable) saveElement(editable);
    };

    const handleBlur = (event) => {
      const editable = event.target.closest('[data-copy-editable="true"]');
      if (editable) saveElement(editable);
    };

    const observer = new MutationObserver(schedulePrepare);
    const main = document.querySelector('main');

    schedulePrepare();
    if (main) observer.observe(main, { childList: true, subtree: true });
    document.addEventListener('click', handleClick, true);
    document.addEventListener('input', handleInput, true);
    document.addEventListener('blur', handleBlur, true);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('input', handleInput, true);
      document.removeEventListener('blur', handleBlur, true);
      cleanupEditableState();
    };
  }, [devPreview, enabled, pathname]);

  if (!devPreview || !enabled) return null;

  const handleCopyChanges = async () => {
    const edits = readEdits();
    await navigator.clipboard.writeText(JSON.stringify(edits, null, 2));
    setChangeCount(Object.keys(edits).length);
  };

  const handleReset = () => {
    writeEdits({});
    setChangeCount(0);
    window.location.reload();
  };

  const handleExit = () => {
    window.localStorage.removeItem(MODE_KEY);
    setEnabled(false);
  };

  return (
    <div
      data-copy-editor
      className="fixed bottom-4 right-4 z-[9999] flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-lg border border-black/15 bg-white px-3 py-2 font-body text-xs font-semibold text-black shadow-2xl"
    >
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <Pencil size={14} strokeWidth={2.2} />
        Copy edit
      </span>
      <span className="rounded-full bg-black/5 px-2 py-1 text-black/60">
        {changeCount}
      </span>
      <button
        type="button"
        onClick={handleCopyChanges}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-black/65 transition hover:bg-black/5 hover:text-black"
        title="Copy changes"
        aria-label="Copy changes"
      >
        <ClipboardCopy size={15} strokeWidth={2.2} />
      </button>
      <button
        type="button"
        onClick={handleReset}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-black/65 transition hover:bg-black/5 hover:text-black"
        title="Reset changes"
        aria-label="Reset changes"
      >
        <RotateCcw size={15} strokeWidth={2.2} />
      </button>
      <button
        type="button"
        onClick={handleExit}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-black/65 transition hover:bg-black/5 hover:text-black"
        title="Exit copy edit"
        aria-label="Exit copy edit"
      >
        <X size={16} strokeWidth={2.2} />
      </button>
    </div>
  );
}
