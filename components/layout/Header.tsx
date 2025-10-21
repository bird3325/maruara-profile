import React, { useState, useEffect } from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: '소개', id: 'hero' },
  { label: '프로젝트', id: 'projects' },
];

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTo = useScrollTo();

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-dark-bg/70 backdrop-blur-lg shadow-lg shadow-gray-200/50 dark:shadow-black/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
              꿈꾸는 마루아라
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-500 dark:text-dark-text-secondary hover:text-primary-500 dark:hover:text-primary-500 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
             <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 rounded-md text-gray-500 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-surface focus:outline-none"
              aria-label="메뉴 열기"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // FIX: Added key for AnimatePresence to work correctly.
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-surface shadow-lg"
          >
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-dark-text hover:text-white hover:bg-primary-500"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};