import React from 'react';
import { testimonials } from '../../data/mockData';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">고객 후기</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-dark-text-secondary">
            함께한 파트너들의 신뢰와 만족의 목소리입니다.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark-bg p-8 rounded-lg shadow-sm flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary-500 mb-4" />
              <p className="text-gray-600 dark:text-dark-text-secondary flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
