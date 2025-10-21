import React from 'react';
import { services } from '../../data/mockData';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">제공 서비스</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-dark-text-secondary">
            다양한 기술 스택을 활용하여 비즈니스에 필요한 최적의 솔루션을 제공합니다.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white dark:bg-dark-surface rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-primary-50 text-primary-500 dark:bg-dark-bg">
                    {Icon && <Icon size={40} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
