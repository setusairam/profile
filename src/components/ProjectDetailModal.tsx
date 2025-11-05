import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    techStack: string[];
    github?: string;
    demo?: string;
    image: string;
    category: string[];
    icon: string;
  } | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden my-8"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              </button>

              <div className="p-8 overflow-y-auto max-h-[calc(90vh-2rem)]">
                <div className="flex gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-40 h-40 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                        <Icon icon={project.icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className="bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h2>
                  </div>
                </div>

                <div className="prose prose-sm dark:prose-invert max-w-none mb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 dark:bg-blue-400 text-white dark:text-black rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors font-medium"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;