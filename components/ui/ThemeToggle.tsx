import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={() => toggleTheme()}
      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-surface focus:outline-none transition-colors"
      aria-label="테마 전환"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
