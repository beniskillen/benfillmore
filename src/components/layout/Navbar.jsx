import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Hospitality', path: '/hospitality' },
  { label: 'Work', path: '/work' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const [darkPage, setDarkPage] = useState(false);

  useEffect(() => {
    // Pages with dark/colored heroes where nav text would be invisible
    const darkHeroRoutes = ['/about', '/contact', '/hospitality', '/trades', '/automotive'];
    setDarkPage(darkHeroRoutes.includes(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4" style={{ background: '#b40425' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-2xl tracking-tight flex-shrink-0 text-white">
            FILLMORE
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium transition-colors relative group whitespace-nowrap text-white/80 hover:text-white"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-white transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link
              to="/apply"
              className="text-sm font-semibold px-5 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 whitespace-nowrap flex-shrink-0 text-black"
              style={{ background: '#faf0da' }}
            >
              Book a Strategy Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center overflow-y-auto py-24"
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={item.path}
                    className="font-heading font-bold text-3xl uppercase tracking-tight text-black hover:text-black/50 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <Link
                  to="/apply"
                  className="bg-black text-white text-lg font-semibold px-8 py-3 rounded-full inline-block"
                >
                  Book a Strategy Call
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}