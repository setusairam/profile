import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const technicalSkills = [
    { name: 'Python', icon: 'material-icon-theme:python' },
    { name: 'Java', icon: 'devicon:java' },
    { name: 'HTML', icon: 'vscode-icons:file-type-html' },
    { name: 'CSS', icon: 'devicon:css3' },
    { name: 'My SQL', icon: 'logos:mysql-icon' },
    { name: 'JS', icon: 'devicon:javascript' },
    { name: 'React', icon: 'devicon:react' },
  ];

  const additionalTools = [
    { name: 'GIT', icon: 'devicon:git' },
    { name: 'Github', icon: 'lineicons:github' },
    { name: 'Linux', icon: 'flat-color-icons:linux' },
    { name: 'VS Code', icon: 'devicon:vscode' },
    { name: 'Figma', icon: 'logos:figma' },
    { name: 'Canva', icon: 'simple-icons:canva' },
    { name: 'MongoDB', icon: 'devicon:mongodb' },
    { name: 'Excel', icon: 'vscode-icons:file-type-excel' },
    { name: 'Power BI', icon: 'logos:microsoft-power-bi' },
    { name: 'Jupyter', icon: 'devicon:jupyter' },
  ];

  const availableRoles = [
    {
      title: 'Python Developer',
      type: 'Full-time/Part-time',
      description: 'Experienced in backend development, data analysis, and automation',
      icon: 'mdi:language-python',
      points: [
        'Backend API development with Flask',
        'Data analysis and visualization with Pandas/Matplotlib',
        'Web scraping and automation scripts',
        'Machine learning model implementation'
      ],
      skills: ['Python', 'Flask', 'Pandas', 'NumPy', 'MongoDB']
    },
    {
      title: 'Graphic Designer',
      type: 'Freelance',
      description: 'Creative visual design for brands and digital marketing',
      icon: 'mdi:palette',
      points: [
        'Brand identity and logo design',
        'Marketing materials and brochures',
        'Social media graphics and templates',
        'UI/UX design mockups',
      ],
      skills: ['Figma', 'Canva', 'Brand Strategy', 'logo design']
    },
    {
      title: 'Content Writer',
      type: 'Freelance',
      description: 'Technical documentation and engaging blog content',
      icon: 'mdi:pencil',
      points: [
        'Technical documentation and API guides',
        'SEO-optimized blog posts and articles',
        'Product descriptions and marketing copy',
        'Social media content strategy',
        'Ghost writing and Copy Writing'
      ],
      skills: ['Technical Writing', 'SEO', 'Content Strategy', 'Research', 'Copywriting', 'Articles']
    },
    {
      title: 'Frontend development',
      type: 'Full-time/Part-time',
      description: 'Experienced in creating a stunning outlook and landing pages for the websites',
      icon: 'mdi:web',
      points: [
        'Responsive and mobile-first UI design',
        'Cross-browser and cross-platform compatibility',
        'Optimized page performance and load speed',
        'Accessible and user-friendly interfaces',
        'Clean, modular, and maintainable codebase'
      ],
      skills: ['React', 'CSS', 'JS', 'HTML', 'Design', 'Optimize']
    },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/setusairam' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/setusairam-y/' },
    { name: 'Twitter', icon: 'mdi:twitter', url: 'https://x.com/itsSSR_10' },
  ];

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
          {/* Hero Section */}
          <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.h1 
                className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm Yarlagadda Setu Sai Ram
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                A passionate full-stack developer and creative professional with expertise in 
                modern web technologies, Python development, and digital design. I love building 
                innovative solutions that make a difference.
              </motion.p>
              <motion.div 
                className="flex items-center space-x-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <Icon icon={link.icon} className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
              <motion.button 
                className="bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-6 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 dark:border-blue-800">
                  <img
                    src="/public/images/profile/setu3.jpg"
                    alt="John Doe - Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>

          {/* Technical Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon icon={skill.icon} className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Additional Tools */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Additional Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {additionalTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon icon={tool.icon} className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Available For Roles */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Available For Roles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {availableRoles.map((role, index) => (
                <motion.div
                  key={role.title}
                  className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div 
                      className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon icon={role.icon} className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{role.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">{role.type}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{role.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What I do</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {role.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to collaborate?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's work together to bring your ideas to life!
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-8 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;