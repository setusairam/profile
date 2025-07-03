import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { ExternalLink, Github, Code, Palette, Lightbulb } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'publications'>('projects');

  const projects = [
    {
      title: 'Access Control Mechanisms for Secure Websites',
      description: 'This project focuses on implementing an Access Control Mechanism to enhance website security. After logging in, users must complete multi-factor authentication by entering an OTP sent to their mobile. Once logged in, the dashboard displays only specific sections, while others remain locked for added security. Users can unlock these private sections by entering a 4- or 6-digit PIN. To ensure safety, sessions automatically log out after 1 minute of inactivity, and unlocked sections require the PIN again if accessed in a new session, maintaining tight control over sensitive information.',
      techStack: ['Python', 'Flask','SQLite', 'Java Script', 'HTML', 'CSS'],
      github: 'https://github.com',
      //demo: 'https://demo.com',
      image: 'public/images/projects/accesscontrols1.png',
      category: ['Full Stack','Security'],
      icon: 'mdi:security-lock'
    },
        
    {
      title: 'Magnifier (AccessiView)',
      description:
    'The Magnifier project aims to develop a web application tailored for visually impaired students, providing accessibility features that enhance their learning experience. Key features include:\n' +
    '1. Filters: Customizable display filters for clarity.\n' +
    '2. OCR: Converts text to voice for ease.\n' +
    '3. Voice Modulation: Adjustable speech settings.\n' +
    '4. Zoom Options: Customizable text sizes.\n' +
    '5. Live Broadcast: Sharing a specific screen so others can see it in real-time. Each viewer can customize how they view it (like zooming in or changing colors), but their changes won’t affect what others see or what the person sharing the screen is doing.',
      techStack: ['Java Script', 'Python', 'Open cv', 'ngrok', 'HTML', 'CSS'],
      github: 'https://github.com',
      //demo: 'https://demo.com',
      image: 'public/images/projects/magnifier.png',
      category: ['Full Stack', 'Accessibility'],
      icon: 'mdi:eye'
    },
    {
      title: 'Predicting diabetes using machine learning for health care',
      description: 'A machine learning solution for early diabetes prediction using key clinical features like glucose levels, blood pressure, BMI, and age. It compares Logistic Regression and Random Forest models, with preprocessing steps such as outlier removal and SMOTE for class balancing. Grid Search CV was used for hyperparameter tuning to optimize model accuracy. The outcome is a reliable diagnostic tool designed to support healthcare professionals in assessing diabetes risk and enabling timely intervention.',
      techStack: ['Python', 'Logistic Regression', 'Random Forest', 'Flask', 'Pandas', 'Numpy','Skitlearn', 'HTML', 'CSS', 'Java Script'],
      github: 'https://github.com',
      //demo: 'https://demo.com',
      image: 'public/images/projects/diabetespred.png',
      category: ['Machine Learning', 'Healthcare'],
      icon: 'solar:health-bold'
    },
    {
      title: 'Travel Planner (TravelX)',
      description: 'A responsive Travel Planner web application that allows users to input trip details and receive smart travel suggestions. The app includes a curated list of popular tourist destinations and famous spots that are readily accessible under a free plan, providing a seamless and user-friendly experience for organizing trips efficiently.',
      techStack: ['HTML', 'CSS', 'JS'],
      github: 'https://github.com',
      //demo: 'https://demo.com',
      image: 'public/images/projects/travelplanner.png',
      category: ['Frontend', 'Web App'],
      icon: 'mdi:clipboard-check'
    },
    {
      title: 'Staganography tool',
      description: 'This steganography project presents a Python-based application that conceals and retrieves hidden information within images. It functions as a command-line and GUI tool, allowing users to embed confidential text or files into carrier images without visibly affecting their appearance. Using libraries like Pillow for image processing and Tkinter for the graphical interface, the tool enables users to select images, hide custom messages, and later extract them. This project demonstrates practical implementation of steganographic techniques, offering a simple yet effective solution for secure and discreet data hiding within image files.',
      techStack: ['Python', 'Pillow', 'Tkinter', 'stegano'],
      github: 'https://github.com',
      //demo: 'https://demo.com',
      image: 'public/images/projects/steganography.png',
      category: ['Security Tool', 'Desktop App'],
      icon: 'carbon:encryption'
    },
    {
      title: 'Vision Flex',
      description: ' Vision Flex, is an accessible PDF reader designed to enhance document readability for individuals with visual impairments or specific viewing preferences. Built using HTML, CSS, and JavaScript with the help of PDF.js, it allows users to upload and view PDF files in a user-friendly interface. The application offers a variety of visual filters—including grayscale, inverted colors, sepia tones, and simulated color vision deficiencies like protanopia and tritanopia—to suit different accessibility needs. Additional features include fullscreen mode and future support for PDF editing, making Vision Flex a versatile tool for inclusive digital reading.',
      techStack: ['Java Script', 'HTML', 'CSS'],
      github: 'https://github.com',
      demo: 'https://setusairam9.github.io/VisionFlex/',
      image: 'public/images/projects/visionflex.png',
      category: ['Frontend', 'Accessibility'],
      icon: 'mdi:eye'
    },
    // {
    //   title: 'Portfolio Website',
    //   description: 'Modern, responsive portfolio website with dark mode, animations, and optimized performance.',
    //   techStack: ['React', 'TypeScript',,'Vite', 'Tailwind CSS', 'Framer Motion'],
    //   github: 'https://github.com',
    //   demo: 'https://demo.com',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   category: ['Frontend', 'Portfolio'],
    //   icon: 'mdi:web'
    // },
  ];

  const publications = [
    {
      title: 'Access Control Mechanisms for Secure Websites',
      platform: 'IEEE Students Conference on Electrical, Electronics and Computer Science (SCEECS)',
      date: '2025',
      description: 'Developed a multi-layered access control system for web applications to protect user-sensitive data. The system combines time-based OTP authentication for primary login with an additional PIN layer to secure high-sensitivity data within user accounts. This dual-phase architecture enhances data security by applying hierarchical protection based on sensitivity level, while maintaining a smooth user experience (avg. 8s for general access, 12s for PIN-protected info). Demonstrated significant improvement over uniform security systems.',
      link: 'https://ieeexplore.ieee.org/abstract/document/10941623'
    },
    {
      title: 'Predicting diabetes using machine learning for health care',
      platform: 'Not Published',
      date: '20XX',
      description: 'Developed a machine learning system to predict diabetes using key health indicators such as glucose, blood pressure, BMI, and age. Applied data preprocessing steps including outlier removal and class balancing with SMOTE. Implemented and fine-tuned Logistic Regression and Random Forest models using Grid Search CV to evaluate performance. The study demonstrated that machine learning can significantly aid in early diabetes detection, offering healthcare professionals a reliable decision-support tool for timely intervention and improved patient outcomes.',
      //link: 'https://ieeexplore.ieee.org/'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-32 right-20 w-16 h-16 bg-blue-300 dark:bg-blue-700 rounded-full opacity-30"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-32 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30"
          animate={{ 
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-10 w-18 h-18 bg-blue-400 dark:bg-blue-600 rounded-full opacity-30"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Geometric shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-300 dark:bg-blue-700 transform rotate-45 opacity-20"
          animate={{ 
            rotate: [45, 225, 405],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/3 w-6 h-6 bg-blue-400 dark:bg-blue-600 transform rotate-12 opacity-20"
          animate={{ 
            rotate: [12, 192, 372],
            y: [0, -25, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My Work
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Explore my latest projects and publications showcasing innovative solutions and technical expertise
            </motion.p>
          </div>

          {/* Tab Navigation - Side by Side */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gray-100 dark:bg-gray-900 p-1 rounded-xl shadow-lg flex">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'projects'
                    ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Code size={20} />
                <span>Projects</span>
              </button>
              <button
                onClick={() => setActiveTab('publications')}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'publications'
                    ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Palette size={20} />
                <span>Publications</span>
              </button>
            </div>
          </motion.div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:border-blue-300 dark:hover:border-blue-700"
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <motion.div 
                        className="bg-white/90 dark:bg-black/90 p-2 rounded-full"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon icon={project.icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4 flex flex-wrap gap-1 justify-end">
                      {project.category.map((cat, catIndex) => (
                        <motion.span
                          key={cat}
                          className="bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-2 py-1 rounded-full text-xs font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + catIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {cat}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Publications Tab */}
          {activeTab === 'publications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {publications.map((publication, index) => (
                <motion.div
                  key={publication.title}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 group hover:border-blue-300 dark:hover:border-blue-700"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div 
                      className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {publication.platform} • {publication.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {publication.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {publication.description}
                  </p>
                  {publication.link && (
                    <motion.a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-2 font-medium"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Read More</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-20 bg-blue-50 dark:bg-blue-900/20 p-12 rounded-2xl border border-blue-200 dark:border-blue-800"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mb-6"
            >
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-white dark:text-black" />
              </div>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in my work?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new projects and opportunities. Let's collaborate and create something amazing together!
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-8 py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 font-medium shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact me if you're interested in my work!
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;