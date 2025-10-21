import React from 'react';
import { Github, Linkedin, Mail, Phone, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

// FIX: Removed React.FC for better type inference and to avoid potential issues with libraries like framer-motion.
export const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">연락하기</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-dark-text-secondary">
            프로젝트 문의, 협업 제안 등 어떤 이야기든 환영합니다.
            <br/>
            아래 연락처로 편하게 연락주세요.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-surface p-8 sm:p-12 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">이메일</h3>
                  <a href="mailto:contact@maruara.dev" className="text-primary-500 hover:underline">contact@maruara.dev</a>
                </div>
              </div>
               <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">전화번호</h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary">010-0000-0000</p>
                </div>
              </div>
            </div>
             <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 text-primary-500 mt-1 mr-4 flex-shrink-0" >
                  <Github />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">소셜</h3>
                  <div className="flex space-x-4 mt-1">
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-500"><Github/></a>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-500"><Linkedin/></a>
                  </div>
                </div>
              </div>
               <div className="flex items-start">
                <FileDown className="w-6 h-6 text-primary-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">포트폴리오</h3>
                  <a href="#" className="text-primary-500 hover:underline">PDF 다운로드</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
