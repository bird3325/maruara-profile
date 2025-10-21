import React from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';
import { motion } from 'framer-motion';

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const Hero = () => {
  const scrollTo = useScrollTo();

  return (
    <section id="hero" className="py-24 sm:py-32 bg-white dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
                성공적인 1인 창업
              </span>
              을 꿈꾸며 달리는
              <br />
              마루아라입니다! 🚀
            </h1>
            <div className="mt-6 text-lg text-gray-600 dark:text-dark-text-secondary max-w-xl mx-auto space-y-4">
              <p>
                단순히 아이디어만 생각하는 게 아니라, 직접 다양한 실험들을 해보면서 맨몸으로 부딪히고 있어. 때로는 성공하고, 때로는 아쉽게 실패도 하지만, 그 모든 과정을 통해 탄탄하게 사업을 구상하고 진행하는 중이야! 💪
              </p>
              <p>
                결국 내가 만들 건, 사용자들이 '인생템'이라고 부를 만한 웹 애플리케이션! ✨ 유저 경험에 진심을 담아서, 우리 비즈니스 파트너 사장님들이 진짜 필요한 효율적이고 안정적인 솔루션을 제공하는 게 내 최종 목표거든!
              </p>
               <p>
                나의 좌충우돌 창업 스토리가 궁금하다면, 앞으로도 쭉 지켜봐 주고, 함께 응원해 줄 거지? 우리 함께 떡상길 걸어보자!
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary w-full sm:w-auto"
              >
                프로젝트 보기
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* FIX: Removed non-standard "jsx" prop from style tag. */}
      <style>{`
        .btn-primary {
          background-image: linear-gradient(to right, #0891b2, #22d3ee);
          color: white;
          padding: 0.85rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(8, 145, 178, 0.2);
          background-size: 200% auto;
        }
        .btn-primary:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(8, 145, 178, 0.3);
        }
        .btn-secondary {
          background: transparent;
          color: #06b6d4;
          border: 1px solid #06b6d4;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
        }
        .btn-secondary:hover {
          background: #ecfeff;
        }
        .dark .btn-secondary:hover {
            background: rgba(6, 182, 212, 0.1);
        }
      `}</style>
    </section>
  );
};