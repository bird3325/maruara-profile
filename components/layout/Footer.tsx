import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

// FIX: Removed React.FC for better type inference and consistency.
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-surface border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary text-center sm:text-left">
                    &copy; {currentYear} Maruara Dream. All rights reserved.
                </p>
            </div>
          <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-500 dark:text-dark-text-secondary hover:text-primary-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
};