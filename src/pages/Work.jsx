import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';
import { WORK_PHOTO_ITEMS } from '../lib/galleryImages';

const VIDEO_WORK_ITEMS = [
  {
    id: 'video-content-reel',
    type: 'video',
    category: ['Hospitality', 'UGC', 'Video'],
    label: 'Hospitality',
    project: 'Content Reel',
    kind: 'Brand Reel',
    src: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/f4e48bb23_Reel4.mp4',
    poster: null,
    size: 'large',
  },
  {
    id: 'video-promo',
    type: 'video',
    category: ['Hospitality', 'Video'],
    label: 'Hospitality',
    project: 'Promo Video',
    kind: 'Promo Video',
    src: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/bb1795bd4_Reel5.mov',
    poster: null,
    size: 'tall',
  },
  {
    id: 'video-teaser',
    type: 'video',
    category: ['Hospitality', 'UGC'],
    label: 'Hospitality',
    project: 'Teaser',
    kind: 'Meta Ad',
    src: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/6aa7f289b_Teaser1.mp4',
    poster: null,
    size: 'wide',
  },
  {
    id: 'video-ugc',
    type: 'video',
    category: ['Hospitality', 'UGC', 'Video'],
    label: 'Hospitality',
    project: 'UGC',
    kind: 'UGC Ad',
    src: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/121cff92d_Teaser2.mp4',
    poster: null,
    size: 'tall',
  },
];

const WORK_ITEMS = [...VIDEO_WORK_ITEMS, ...WORK_PHOTO_ITEMS];

const FILTERS = ['All', 'Hospitality', 'Video', 'Photo', 'Food', 'Beverage', 'Venue', 'Lifestyle', 'People', 'UGC'];

// CSS grid span classes by size
const SIZE_CLASSES = {
  large: 'col-span-2 row-span-2',
  tall: 'col-span-1 row-span-2',
  wide: 'col-span-2 row-span-1',
  small: 'col-span-1 row-span-1',
};

const ASPECT_CLASSES = {
  large: 'aspect-square',
  tall: 'aspect-[9/16]',
  wide: 'aspect-video',
  small: 'aspect-square',
};

function WorkTile({ item, onClick }) {
  const videoRef = useRef(null);
  const tileRef = useRef(null);
  const visibleTags = item.category.filter((tag) => !['Hospitality', 'Photo'].includes(tag)).slice(0, 3);

  useEffect(() => {
    if (item.type !== 'video') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );
    if (tileRef.current) observer.observe(tileRef.current);
    return () => observer.disconnect();
  }, [item.type]);

  return (
    <div
      ref={tileRef}
      onClick={() => onClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick(item);
        }
      }}
      className={`${SIZE_CLASSES[item.size]} cursor-pointer group relative overflow-hidden rounded-xl bg-black`}
      style={{ minHeight: item.size === 'tall' ? '300px' : undefined }}
    >
      <div className={`w-full h-full ${item.size === 'tall' ? '' : ASPECT_CLASSES[item.size]}`}>
        {item.type === 'video' ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            poster={item.poster}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            onError={(e) => { e.target.style.display = 'none'; }}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={item.src}
            alt={item.alt || item.project}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-white opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0 transition-all duration-300">
        <p className="font-heading font-bold text-sm md:text-base uppercase tracking-tight">
          {item.label}
        </p>
        <p className="font-body text-xs text-white/70 mt-0.5">
          {item.kind}
        </p>
        {visibleTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {visibleTags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/15 px-2 py-0.5 font-body text-[10px] uppercase tracking-wide text-white/80">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const item = items[activeIndex];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/60 hover:text-white transition-colors z-10 p-2"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 md:left-6 text-white/50 hover:text-white transition-colors z-10 p-2"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 md:right-6 text-white/50 hover:text-white transition-colors z-10 p-2"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col items-center max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full rounded-xl overflow-hidden bg-black" style={{ maxHeight: '70vh' }}>
          {item.type === 'video' ? (
            <video
              key={item.src}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-contain"
              style={{ maxHeight: '70vh' }}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={item.src}
              alt={item.alt || item.project}
              className="w-full object-contain"
              style={{ maxHeight: '70vh' }}
            />
          )}
        </div>
        <div className="mt-5 text-center">
          <p className="font-heading font-bold text-white text-xl uppercase tracking-tight">{item.project}</p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="font-body text-xs px-3 py-1 rounded-full bg-white/10 text-white/60">{item.label}</span>
            <span className="font-body text-xs px-3 py-1 rounded-full bg-white/10 text-white/60">{item.kind}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            {item.category.filter((tag) => tag !== 'Hospitality').map((tag) => (
              <span key={tag} className="font-body text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/45 uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeFilter === 'All'
    ? WORK_ITEMS
    : WORK_ITEMS.filter(item => item.category.includes(activeFilter));

  const openLightbox = useCallback((item) => {
    const idx = filtered.findIndex(i => i.id === item.id);
    setLightboxIndex(idx);
  }, [filtered]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevItem = useCallback(() => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const nextItem = useCallback(() => setLightboxIndex(i => (i + 1) % filtered.length), [filtered.length]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-14 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-black/40">Work</span>
            <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] uppercase tracking-tight text-black mt-4">
              Creative built
              <br />
              to help venues book.
            </h1>
            <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              Food, room, people and proof. The assets are built to support an offer, not just fill a feed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-black/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-body text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black/60 border-black/10 hover:border-black hover:text-black'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bento grid */}
      <section className="py-10 md:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-2 md:gap-4"
            >
              {filtered.map((item) => (
                <WorkTile key={item.id} item={item} onClick={openLightbox} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black">
              Want work like this tied to bookings?
            </h2>
            <p className="font-body text-black/60 text-lg mt-6 max-w-xl mx-auto">
              Book a strategy call. We'll show you how the creative, offer and booking path would work for your venue.
            </p>
            <div className="mt-10">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full bg-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book a Strategy Call →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </>
  );
}
