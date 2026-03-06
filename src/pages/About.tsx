import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const professionalRoles = [
    {
      title: 'Python Development',
      image: '/images/profile/pythondeveloper.png',
      technicalSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'Django', icon: 'logos:django' },
        { name: 'Flask', icon: 'logos:flask' },
        { name: 'NumPy', icon: 'logos:numpy' },
        { name: 'Pandas', icon: 'simple-icons:pandas' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'VS Code', icon: 'logos:visual-studio-code' }
      ],
      capabilities: [
        'Backend API development with Django/Flask',
        'Data analysis and visualization with Pandas/Matplotlib',
        'Web scraping and automation scripts',
        'Machine learning model implementation',
        'Database design and optimization'
      ]
    },
    // {
    //   title: 'AI Engineer',
    //   image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technicalSkills: [
    //     { name: 'TensorFlow', icon: 'logos:tensorflow' },
    //     { name: 'PyTorch', icon: 'logos:pytorch-icon' },
    //     { name: 'Scikit-learn', icon: 'simple-icons:scikitlearn' },
    //     { name: 'OpenAI', icon: 'simple-icons:openai' },
    //     { name: 'Jupyter', icon: 'logos:jupyter' },
    //     { name: 'Python', icon: 'logos:python' },
    //     { name: 'CUDA', icon: 'logos:nvidia' },
    //     { name: 'MLflow', icon: 'simple-icons:mlflow' }
    //   ],
    //   capabilities: [
    //     'Machine learning model development and training',
    //     'Natural language processing applications',
    //     'Computer vision and image recognition',
    //     'AI model deployment and optimization',
    //     'Data preprocessing and feature engineering'
    //   ]
    // },
    {
      title: 'Data Analysis',
      image: '/images/profile/dataanalyst.png',
      technicalSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'My SQL', icon: 'logos:mysql-icon' },
        { name: 'Postgre SQL', icon: 'devicon:postgresql' },
        //{ name: 'SQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'Power BI', icon: 'logos:microsoft-power-bi' },
        { name: 'Excel', icon: 'vscode-icons:file-type-excel' },
        { name: 'Tableau', icon: 'logos:tableau-icon' },
        { name: 'Matplotlib', icon: 'devicon:matplotlib' },
        { name: 'Seaborn', icon: 'simple-icons:plotly' }
        
      ],
      capabilities: [
        'Data cleaning, preprocessing, and transformation',
        'Statistical analysis and hypothesis testing',
        'Interactive dashboard creation',
        'Business intelligence reporting',
        'Predictive analytics and forecasting'
      ]
    },
    // {
    //   title: 'Web Development',
    //   image: '/images/profile/webdeveloper.png',
    //   technicalSkills: [
    //     { name: 'React', icon: 'logos:react' },
    //     { name: 'JavaScript', icon: 'logos:javascript' },
    //     { name: 'TypeScript', icon: 'logos:typescript-icon' },
    //     { name: 'HTML5', icon: 'logos:html-5' },
    //     { name: 'CSS3', icon: 'logos:css-3' },
    //     { name: 'Node.js', icon: 'logos:nodejs-icon' },
    //     { name: 'Vite', icon: 'logos:vitejs' }
    //   ],
    //   capabilities: [
    //     'Responsive and mobile-first UI design',
    //     'Modern React applications with hooks',
    //     'Cross-browser compatibility optimization',
    //     'Performance optimization and SEO',
    //     'Component-based architecture design'
    //   ]
    // },
    {
      title: 'Other Skills & Technologies',
      image: '/images/profile/othertech.png',
      technicalSkills: [
        { name: 'JAVA', icon: 'devicon:java' },
        { name: 'GIT', icon: 'devicon:git' },
    { name: 'Github', icon: 'lineicons:github' },
    { name: 'Linux', icon: 'flat-color-icons:linux' },
    { name: 'Figma', icon: 'logos:figma' },
    { name: 'Canva', icon: 'simple-icons:canva' },
    { name: 'MongoDB', icon: 'devicon:mongodb' },
    { name: 'Jupyter', icon: 'devicon:jupyter' },
      ],
      capabilities: [
        'Responsive and mobile-first UI design',
        'Modern React applications with hooks',
        'Cross-browser compatibility optimization',
        'Performance optimization and SEO',
        'Component-based architecture design'
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/setusairam' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/setusairam-y/' },
    { name: 'Twitter', icon: 'mdi:twitter', url: 'https://x.com/itsSSR_10' },
  ];

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1BEyzwLM9qKpG5BBLuSKl1myKHkyeQbSv/view?usp=sharing', '_blank');
  };

  const professionalTitles = [
    'Data Analyst',
    'Python Developer', 
    'Frontend Developer',
    'Designer'
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
                className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm Yarlagadda Setu Sai Ram
              </motion.h1>
              
              {/* Professional Titles */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  {professionalTitles.map((title, index) => (
                    <React.Fragment key={title}>
                      <motion.span
                        className="text-xl font-semibold text-blue-600 dark:text-blue-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {title}
                      </motion.span>
                      {index < professionalTitles.length - 1 && (
                        <span className="text-blue-400 dark:text-blue-500 font-bold">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                A passionate and creative professional with a strong foundation 
                in modern development practices, data analytics, and digital design. 
                I enjoy building secure and scalable solutions that solve real-world problems and 
                thrive in collaborative, fast-paced environments that encourage innovation and continuous learning.
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
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
                    transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                  >
                    <Icon icon={link.icon} className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.button
                onClick={handleResumeDownload}
                className="bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-6 py-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
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
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-blue-200 dark:border-blue-800">
                  <img
                    src="/images/profile/setu4.png"
                    alt="Setu Sai Ram - Portfolio"
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
          

          {/* My Work Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My Work
            </motion.h2>

            <div className="space-y-24">
              {professionalRoles.map((role, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={role.title} className="relative">
                    {/* Role Heading */}
                    <motion.h3
                      className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {role.title}
                    </motion.h3>

                    {/* Alternating Layout */}
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                      {/* Image Side */}
                      <motion.div
                        className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <div className="relative group">
                          <div className="w-full h-80 rounded-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                            <img
                              src={role.image}
                              alt={`${role.title} workspace`}
                              className="w-full h-full object-cover"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" /> */}
                          </div>
                          
                          {/* Floating skill icons on image */}
                          <div className="absolute inset-0 pointer-events-none">
                            {role.technicalSkills.slice(0, 4).map((skill, skillIndex) => (
                              <motion.div
                                key={skill.name}
                                className="absolute bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                                style={{
                                  top: `${20 + skillIndex * 15}%`,
                                  left: `${15 + (skillIndex % 2) * 60}%`,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                  duration: 0.5, 
                                  delay: 0.5 + skillIndex * 0.1,
                                  type: "spring",
                                  stiffness: 200
                                }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                              >
                                <Icon icon={skill.icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Content Side */}
                      <motion.div
                        className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <div className="space-y-8">
                          {/* Technical Skills */}
                          <div>
                            <div className="grid grid-cols-4 gap-4 mb-6">
                              {role.technicalSkills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skill.name}
                                  className="group relative flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-300 cursor-pointer"
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: 0.4 + skillIndex * 0.05 }}
                                  whileHover={{ scale: 1.1, y: -5 }}
                                >
                                  <Icon icon={skill.icon} className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                                  
                                  {/* Tooltip */}
                                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                                    {skill.name}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Capabilities */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What I Can Do:</h4>
                            <ul className="space-y-3">
                              {role.capabilities.map((capability, capIndex) => (
                                <motion.li
                                  key={capIndex}
                                  className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: 0.6 + capIndex * 0.1 }}
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="leading-relaxed">{capability}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Availability Badge */}
                          <motion.div
                            className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {/* <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                            Available for Full-time & Freelance */}
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Section Divider */}
                    {index < professionalRoles.length - 1 && (
                      <motion.div
                        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      />
                    )}
                  </div>
                );
              })}
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