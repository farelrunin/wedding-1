import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-light-gold/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-script text-2xl text-wood-brown"
        >
          Kami &amp; Kami
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('couple')}
            className="text-sm font-sans text-wood-brown hover:text-light-gold transition"
          >
            Pengantin
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="text-sm font-sans text-wood-brown hover:text-light-gold transition"
          >
            Acara
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-sm font-sans text-wood-brown hover:text-light-gold transition"
          >
            Galeri
          </button>
          <button
            onClick={() => scrollToSection('guestbook')}
            className="text-sm font-sans text-wood-brown hover:text-light-gold transition"
          >
            Ucapan
          </button>
          <button
            onClick={() => scrollToSection('gift')}
            className="text-sm font-sans text-wood-brown hover:text-light-gold transition"
          >
            Hadiah
          </button>
        </div>

        {/* Dark Mode & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-light-gold/10 rounded-lg transition"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-light-gold" />
            ) : (
              <Moon className="w-5 h-5 text-wood-brown" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-light-gold/10 rounded-lg transition"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-wood-brown" />
            ) : (
              <Menu className="w-6 h-6 text-wood-brown" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-light-gold/20 bg-white/90 backdrop-blur-md"
        >
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('couple')}
              className="block w-full text-left px-4 py-2 text-wood-brown hover:bg-light-gold/10 rounded-lg transition"
            >
              Pengantin
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="block w-full text-left px-4 py-2 text-wood-brown hover:bg-light-gold/10 rounded-lg transition"
            >
              Acara
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-wood-brown hover:bg-light-gold/10 rounded-lg transition"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection('guestbook')}
              className="block w-full text-left px-4 py-2 text-wood-brown hover:bg-light-gold/10 rounded-lg transition"
            >
              Ucapan
            </button>
            <button
              onClick={() => scrollToSection('gift')}
              className="block w-full text-left px-4 py-2 text-wood-brown hover:bg-light-gold/10 rounded-lg transition"
            >
              Hadiah
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
