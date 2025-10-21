import React from 'react';
import { stats } from '../../data/mockData';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const Icon = LucideIcons[stat.icon as keyof typeof LucideIcons] as React.ElementType;
  
  return (
     <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center p-4 text-center sm:flex-row sm:text-left"
      >
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-500 dark:bg-dark-surface dark:text-primary-500">
                {Icon && <Icon size={32} />}
            </div>
        </div>
        <div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary">{stat.label}</p>
        </div>
     </motion.div>
  );
};


// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const Stats = () => {
  return (
    <section id="stats" className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:divide-gray-700 rounded-lg shadow-sm bg-white dark:bg-dark-surface overflow-hidden">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};
