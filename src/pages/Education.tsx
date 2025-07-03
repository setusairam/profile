import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Trophy, Users, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  //const [activeTab, setActiveTab] = useState<'education' | 'certifications' | 'achievements'>('education');
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Kalasalingam Academy of Research and Education',
      location: 'Srivilliputtur, India',
      period: '2022 - Present',
      //cgpa: '8.7/10.0',
      description: 'Specialized in Cyber Security. This Journey was a transformative journey filled with innovation, leadership, and community-building. I balanced academics with real-world projects and active participation in student chapters.',
      coursework: [
        'Data Security',
        'Operating Systems',
        'Databases',
        'Software Engineering',
        'Data Structures',
        'Computer Networks'
      ],
      achievements: [
        'Organized 20+ Major Technical Events including with 5+ Hackathons',
        'Actively Participated in Co Curricular and Extra Curricular Activities',
        'Published multiple research papers'
      ],
      logo: '/images/education/karelogo.png'
    },
    {
      degree: 'Intermediate Education',
      institution: 'Viswasai Jr College',
      location: 'Nellore, India',
      period: '2020 - 2022',
      //cgpa: '3/4.0',
      description: 'Completed 11th and 12th grade with a strong focus on Mathematics, Physics, and Chemistry, laying a solid foundation in core technical subjects. Strengthened analytical and problem-solving abilities while building proficiency in English, leadership, and scientific reasoning.',
      coursework: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English'
      ],
      achievements: [
        'Qualified for JEE Advanced Exam',
        'Managed Both Co Curricular and Education'
      ],
      logo: '/images/education/veslogo.jpg'
    }
  ];

  const certifications = [
    {
      name: 'Wireshark Master',
      platform: 'Udemy',
      year: '2024',
      logo: '/images/education/udemylogo.png',
      skills: ['Wireshark Tool', 'Packet Tracing', 'Packet Sniffing'],
      link: 'https://www.udemy.com/certificate/UC-0386db2a-d0a4-4d66-a4df-588b171043ee/'
    },
    {
      name: 'Introduction to Cyber Security',
      platform: 'Cisco Networking Academy',
      year: '2023',
      logo: '/images/education/ciscologo1.jpg',
      skills: ['Cyber Best Practices', 'Cybersecurity', 'Network Vulnerabilities' , 'Privacy And Data Confidentiality', 'Threat Detection'],
      link: 'https://www.credly.com/badges/5cfbb274-9114-4fc6-aed1-fed62302a439'
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List Recognition',
      institution: 'Stanford University',
      year: '2017-2019',
      icon: 'mdi:trophy',
      category: 'Academic Excellence'
    },
    {
      title: 'Best Research Paper Award',
      institution: 'IEEE Computer Society',
      year: '2019',
      icon: 'mdi:file-document',
      category: 'Research'
    },
    {
      title: 'Hackathon Winner',
      institution: 'UC Berkeley Annual Hackathon',
      year: '2016',
      icon: 'mdi:code-braces',
      category: 'Competition'
    },
    {
      title: 'Outstanding Student Leader',
      institution: 'Computer Science Department',
      year: '2017',
      icon: 'mdi:account-group',
      category: 'Leadership'
    },
    {
      title: 'Scholarship Recipient',
      institution: 'National Merit Scholarship',
      year: '2013-2017',
      icon: 'mdi:school',
      category: 'Scholarship'
    },
    {
      title: 'Teaching Excellence Award',
      institution: 'Stanford University',
      year: '2018',
      icon: 'mdi:teach',
      category: 'Teaching'
    }
  ];

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'education':
        return <GraduationCap size={20} />;
      case 'certifications':
        return <Award size={20} />;
      case 'achievements':
        return <Trophy size={20} />;
      default:
        return <GraduationCap size={20} />;
    }
  };

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

  const handleCertificationClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

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
              Education & Achievements
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          {/* Tab Navigation */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gray-100 dark:bg-gray-900 p-1 rounded-xl shadow-lg flex flex-wrap justify-center">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 m-1 ${
                  activeTab === 'education'
                    ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getTabIcon('education')}
                <span>Education</span>
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 m-1 ${
                  activeTab === 'certifications'
                    ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getTabIcon('certifications')}
                <span>Certifications</span>
              </button>
              {/* <button
                onClick={() => setActiveTab('achievements')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 m-1 ${
                  activeTab === 'achievements'
                    ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getTabIcon('achievements')}
                <span>Achievements</span>
              </button> */}
            </div>
          </motion.div>

          {/* Education Tab */}
          {activeTab === 'education' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
              variants={containerVariants}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-6 mb-6">
                    <motion.div 
                      className="bg-blue-100 dark:bg-blue-900 p-4 rounded-2xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="mt-2 lg:mt-0 space-y-1">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin size={16} className="mr-2" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar size={16} className="mr-2" />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                          <div className="text-blue-600 dark:text-blue-400 font-semibold">
                            {/* CGPA: {edu.cgpa} */}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {edu.description}
                      </p>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <BookOpen size={16} className="mr-2" />
                            Key Coursework
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <motion.span
                                key={course}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 + courseIndex * 0.05 }}
                                whileHover={{ scale: 1.1, backgroundColor: "#3B82F6", color: "#FFFFFF" }}
                              >
                                {course}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Trophy size={16} className="mr-2" />
                            Achievements
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                            {edu.achievements.map((achievement, i) => (
                              <motion.li 
                                key={i} 
                                className="text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => handleCertificationClick(cert.link)}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div 
                      className="bg-blue-100 dark:bg-blue-900 p-2 rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={cert.logo} 
                        alt={`${cert.platform} logo`}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {cert.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {cert.platform}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Completed: {cert.year}
                          </p>
                        </div>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink size={16} className="text-blue-600 dark:text-blue-400" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
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
                  
                  {/* <div className="mt-4 text-xs text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    Click to view certification details
                  </div> */}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div 
                      className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon icon={achievement.icon} className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                          {achievement.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        {achievement.institution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;