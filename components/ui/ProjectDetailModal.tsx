import React from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Github, Calendar, User, Users, Activity } from 'lucide-react';
// FIX: Import Variants type to fix framer-motion type error
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// FIX: Explicitly type modalVariants with Variants to resolve type incompatibility
const modalVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } },
};

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
const DetailSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="py-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
        {children}
    </div>
);


// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-dark-surface rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
          >
            <div className="sticky top-0 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm p-4 sm:p-6 border-b dark:border-gray-700 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-500 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg"
                aria-label="닫기"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <img src={project.screenshots[0] || project.thumbnailUrl} alt={`${project.title} 메인 이미지`} className="w-full rounded-lg mb-6 aspect-video object-cover"/>
              
              <div className="flex flex-col sm:flex-row justify-around items-start sm:items-center gap-6 text-sm mb-6 bg-gray-50 dark:bg-dark-bg p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  <div>
                    <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">기간:</span> {project.completionDate}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-primary-500" />
                  <div>
                    <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">역할:</span> {project.role}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary-500" />
                  <div>
                    <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">팀 구성:</span> {project.teamSize}명
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-primary-500" />
                  <div>
                    <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">상태:</span>
                    <span className={`font-medium ${project.status === 'completed' ? 'text-primary-600' : 'text-yellow-600'}`}>
                      {project.status === 'completed' ? ' 완료' : ' 진행중'}
                    </span>
                  </div>
                </div>
              </div>

              <DetailSection title="문제 정의">
                 <p className="text-gray-600 dark:text-dark-text-secondary">{project.problem}</p>
              </DetailSection>

              <DetailSection title="솔루션">
                <p className="text-gray-600 dark:text-dark-text-secondary">{project.solution}</p>
              </DetailSection>
              
              {project.screenshots.length > 1 && (
                <DetailSection title="주요 기능">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {project.screenshots.map((ss, index) => (
                           <img key={index} src={ss} alt={`스크린샷 ${index + 1}`} className="rounded-md border dark:border-gray-700"/>
                        ))}
                    </div>
                </DetailSection>
              )}

              <DetailSection title="기술 스택">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <span key={tech} className="bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-dark-text-secondary px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                </div>
              </DetailSection>

              <DetailSection title="도전과제 해결">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-dark-text-secondary">
                    {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </DetailSection>

              <DetailSection title="결과 및 성과">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-dark-text-secondary">
                    {project.results.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </DetailSection>
            </div>
            
            <div className="sticky bottom-0 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm p-4 sm:p-6 border-t dark:border-gray-700 flex flex-col sm:flex-row gap-4">
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto flex items-center justify-center"><ExternalLink size={16} className="mr-2"/> 데모 사이트 보기</a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto flex items-center justify-center"><Github size={16} className="mr-2"/> GitHub 코드 보기</a>}
                 <button onClick={onClose} className="btn-secondary w-full sm:w-auto sm:ml-auto">닫기</button>
            </div>
            {/* FIX: Removed non-standard "jsx" prop from style tag. */}
            <style>{`
                .btn-primary {
                  background-image: linear-gradient(to right, #0891b2, #22d3ee);
                  color: white; padding: 0.6rem 1.2rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.3s ease; background-size: 200% auto;
                }
                .btn-primary:hover { background-position: right center; }
                .btn-secondary { background: transparent; color: #06b6d4; border: 1px solid #06b6d4; padding: 0.6rem 1.2rem; border-radius: 0.5rem; transition: all 0.2s ease;}
                .btn-secondary:hover { background: #ecfeff; }
                .dark .btn-secondary:hover { background: rgba(6, 182, 212, 0.1); }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
