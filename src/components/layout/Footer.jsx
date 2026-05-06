import React from 'react';
import { Link } from 'react-router-dom';

const FOOTER_NAV = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Niches', path: '/niches' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About', path: '/about' },
];

const NICHE_NAV = [
  { label: 'Hospitality', path: '/niches#hospitality' },
  { label: 'E-commerce', path: '/niches#ecommerce' },
];

const CONNECT = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'hello@fillmoremedia.com.au', href: 'mailto:hello@fillmoremedia.com.au' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo */}
          <div>
            <Link to="/" className="font-heading font-bold text-2xl tracking-tight">
              FILLMORE
            </Link>
            <p className="text-white/40 text-sm mt-4 font-body">
              Hands-on growth marketing for hospitality and e-commerce.
            </p>
          </div>

          {/* Fillmore */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white/50 mb-4">
              Fillmore
            </h4>
            <nav className="flex flex-col gap-3">
              {FOOTER_NAV.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-white/70 hover:text-white transition-colors font-body"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Niches */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white/50 mb-4">
              Niches
            </h4>
            <nav className="flex flex-col gap-3">
              {NICHE_NAV.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-white/70 hover:text-white transition-colors font-body"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white/50 mb-4">
              Connect
            </h4>
            <nav className="flex flex-col gap-3">
              {CONNECT.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm text-white/70 hover:text-white transition-colors font-body"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-body">
            © 2026 Fillmore Media. Sydney, Australia.
          </p>
        </div>
      </div>
    </footer>
  );
}