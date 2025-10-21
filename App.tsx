import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { ProjectDetailModal } from './components/ui/ProjectDetailModal';
import { Project } from './types';
import { useTheme } from './hooks/useTheme';

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
const App = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [theme, toggleTheme] = useTheme();

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  return (
    <div className={`font-sans text-gray-700 dark:text-dark-text-secondary ${theme}`}>
      <Header />
      <main>
        <Projects onProjectSelect={handleOpenModal} />
      </main>
      <Footer />
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default App;
