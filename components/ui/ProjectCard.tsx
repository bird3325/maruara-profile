import React from 'react';
import { Project } from '../../types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="project-card group"
      onClick={onClick}
    >
      <div className="card-thumbnail-wrapper">
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="card-thumbnail"
        />
        <div className="card-thumbnail-overlay"></div>
        <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full z-10 ${project.status === 'completed' ? 'bg-primary-600 text-white' : 'bg-yellow-500 text-white'}`}>
          {project.status === 'completed' ? '완료' : '진행중'}
        </span>
      </div>
      <div className="card-content">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-tag">
              #{tech}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">{project.title}</h3>
        <p className="text-gray-600 dark:text-dark-text-secondary mb-4 h-12 overflow-hidden">{project.description}</p>
        <div className="flex items-center text-primary-500 font-semibold">
          상세보기
          <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
        </div>
      </div>
       {/* FIX: Removed non-standard "jsx" prop from style tag. */}
       <style>{`
        .project-card {
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: white;
            overflow: hidden;
            cursor: pointer;
            border: 1px solid #e5e7eb;
        }
        .dark .project-card {
            background: #0f172a; /* dark-surface */
            border-color: #374151;
        }
        .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.05);
        }
        .card-thumbnail-wrapper {
            position: relative;
            aspect-ratio: 16/9;
            overflow: hidden;
        }
        .card-thumbnail {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover .card-thumbnail {
            transform: scale(1.1);
        }
        .card-thumbnail-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .project-card:hover .card-thumbnail-overlay {
            opacity: 1;
        }
        .card-content {
            padding: 1.5rem;
        }
        .tech-tag {
            background-color: #ecfeff;
            color: #0891b2;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
        }
        .dark .tech-tag {
            background-color: #164e63; /* primary-900 */
            color: #a5f3fc; /* primary-200 */
        }
      `}</style>
    </motion.div>
  );
};
