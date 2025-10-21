import React, { useState, useMemo } from 'react';
import { projects } from '../../data/mockData';
import { Project } from '../../types';
import { ProjectCard } from '../ui/ProjectCard';
import { motion } from 'framer-motion';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

const categories = [
  { key: 'all', name: '전체' },
  { key: 'webapp', name: '웹앱' },
  { key: 'mobile', name: '모바일' },
  { key: 'automation', name: '자동화' },
  { key: 'content', name: '콘텐츠' },
];

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const Projects = ({ onProjectSelect }: ProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects.filter(p => p.featured);
    }
    return projects.filter(
      (p) => p.category === activeCategory && p.featured
    );
  }, [activeCategory]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-24 bg-white dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">프로젝트</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-dark-text-secondary">
            제가 참여하고 완성한 주요 프로젝트들입니다.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                  : 'bg-white dark:bg-dark-bg text-gray-600 dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-dark-surface hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectSelect(project)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};