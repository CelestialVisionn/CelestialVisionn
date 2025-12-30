import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#gallery', label: 'Gallery' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Tablet - Sticky Capsule */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-12">
          <div className="relative md:h-20 lg:h-24 xl:h-28 flex items-center justify-center">
            {/* Centered Capsule containing links */}
            <div
              className={`flex items-center md:gap-1 lg:gap-3 xl:gap-6 md:px-3 lg:px-6 xl:px-8 py-2 md:py-1.5 lg:py-2 rounded-full border shadow-soft transition-all duration-300 ${
                isScrolled
                  ? 'bg-forest/70 backdrop-blur-xl border-cream/20'
                  : 'bg-forest/60 backdrop-blur-xl border-cream/20'
              }`}
            >
              {/* Navigation inside capsule */}
              <div className="flex items-center md:gap-1 lg:gap-3 xl:gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`md:text-[0.6rem] lg:text-xs xl:text-sm font-body tracking-wide-premium uppercase transition-colors duration-300 relative group md:px-2 lg:px-3 xl:px-4 md:py-1 lg:py-1.5 xl:py-2 rounded-full whitespace-nowrap text-cream/90 hover:text-cream hover:bg-cream/10`}
                  >
                    {link.label}
                    <span className="absolute -bottom-0 left-0 w-0 h-px bg-gold/80 transition-all duration-300" />
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('#contact')}
                  className={`md:text-[0.6rem] lg:text-xs xl:text-sm font-body tracking-wide-premium uppercase transition-colors duration-300 relative group md:px-2 lg:px-3 xl:px-4 md:py-1 lg:py-1.5 xl:py-2 rounded-full whitespace-nowrap text-cream/90 hover:text-cream hover:bg-cream/10`}
                >
                  Contact Us
                  <span className="absolute -bottom-0 left-0 w-0 h-px bg-gold/80 transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile - Non-sticky Hamburger with Blurred Glass */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:hidden absolute top-0 left-0 right-0 z-50"
      >
        <div className="px-4 py-4 max-w-full">
          <div className="flex items-center justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-forest/60 backdrop-blur-xl border border-cream/20 text-cream shadow-soft"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-heading text-cream text-left py-2"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/book"
                  className="block text-center w-full rounded-full mt-4 bg-gold hover:bg-gold/90 text-forest font-heading px-6 py-3"
                >
                  Open Booking Form
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
 
