import React from 'react';
import { Link } from 'react-router-dom';
import { isExternalUrl } from '../../lib/cta';

export default function PillButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
}) {
  const base = 'inline-flex items-center gap-2 font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5';
  const variants = {
    primary: 'bg-black text-white hover:shadow-xl',
    secondary: 'bg-white text-black border border-black/10 hover:bg-black hover:text-white hover:shadow-xl',
    'primary-inverted': 'bg-white text-black hover:shadow-xl',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (to && isExternalUrl(to)) return <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
