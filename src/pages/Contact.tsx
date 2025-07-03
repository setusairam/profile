import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Download, Mail, Phone, MapPin, Briefcase, Users, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/setusairam', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/setusairam-y/', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'Twitter', icon: 'mdi:twitter', url: 'https://x.com/itsSSR_10', color: 'hover:text-blue-500 dark:hover:text-blue-300' },
    { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/setusairam10/', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
    { name: 'Medium', icon: 'mdi:medium', url: 'https://medium.com/@setusairam5', color: 'hover:text-green-600 dark:hover:text-green-400' },
    { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/lyfofram.exe/', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
    //{ name: 'Dev.to', icon: 'mdi:dev-to', url: 'https://dev.to', color: 'hover:text-purple-600 dark:hover:text-purple-400' },
    //{ name: 'YouTube', icon: 'mdi:youtube', url: 'https://youtube.com', color: 'hover:text-red-600 dark:hover:text-red-400' },
    //{ name: 'Discord', icon: 'mdi:discord', url: 'https://discord.com', color: 'hover:text-indigo-600 dark:hover:text-indigo-400' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'setusairam5@gmail.com', href: 'mailto:setusairam5@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7XXXX XXX25', href: 'tel:+15551234567' },
    { icon: Linkedin, label: 'Linkedin', value: 'Setu Sai Ram Y', href: 'https://www.linkedin.com/in/setusairam-y/', color: 'text-green-600 dark:text-green-400' },
    { icon: MapPin, label: 'Location', value: 'India', href: null },
  ];

  const availabilityInfo = [
    {
      type: 'Internships',
      icon: Briefcase,
      status: 'Available',
      description: 'Open to summer internships and co-op opportunities',
      details: [
        'Software Engineering Internships',
        'Frontend Web Development',
        'Data Science & Analytics',
        'Product Management',
        'Python Development'
      ],
      color: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
    },
    {
      type: 'Freelancing',
      icon: Users,
      status: 'Available',
      description: 'Taking on freelance projects and consulting work',
      details: [
        'Front end web Development',
        'UI/UX Design',
        'Technical Writing & Documentation',
        'Brand Design & Marketing Designs',
        'Copy Writing & Ghost Writing'
      ],
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-40 h-40 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-28 h-28 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Vector shapes */}
        <motion.div 
          className="absolute top-1/3 left-1/5 w-12 h-12 bg-blue-200 dark:bg-blue-800 transform rotate-45 opacity-15"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-blue-300 dark:bg-blue-700 rounded-full opacity-15"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
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
              Get In Touch
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
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can work together!
            </motion.p>
          </div>

          {/* Main Content - Contact Left, Availability Right */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Half - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={info.label || info.name} 
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-2xl">
                        {info.icon ? (
                          <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <Icon icon={info.icon} className={`w-6 h-6 ${info.color || 'text-blue-600 dark:text-blue-400'}`} />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {info.label || info.name}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg text-gray-900 dark:text-white">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Download Resume
                </h3>
                <motion.button 
                  className="w-full bg-blue-600 dark:bg-blue-400 text-white dark:text-black py-4 px-6 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors flex items-center justify-center space-x-3 shadow-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={24} />
                  <span className="font-medium">Download Resume</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Half - Availability */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Availability
                </h2>
                <div className="space-y-6">
                  {availabilityInfo.map((item, index) => (
                    <motion.div
                      key={item.type}
                      className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div 
                          className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {item.type}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.color}`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detail}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 + detailIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Media - Full Width Bottom */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h2>
              <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl text-center transition-all hover:shadow-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 group"
                  title={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon 
                    icon={link.icon} 
                    className={`w-10 h-10 mx-auto mb-3 text-gray-600 dark:text-gray-400 transition-colors ${link.color}`}
                  />
                  <p className={`text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors ${link.color}`}>
                    {link.name}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center bg-blue-50 dark:bg-blue-900/20 p-12 rounded-2xl border border-blue-200 dark:border-blue-800"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mb-6"
            >
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-white dark:text-black" />
              </div>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to start a conversation?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <motion.a
              href="mailto:john.doe@example.com"
              className="inline-block bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-8 py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 font-medium shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Send me an email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;