import React from 'react';
import { Download, Mail, Phone, MapPin, Briefcase, Users, Linkedin, Github, Twitter, Instagram, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/setusairam', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/setusairam-y/', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/itsSSR_10', color: 'hover:text-blue-500 dark:hover:text-blue-300' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/setusairam10/', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
    { name: 'Medium', icon: Globe, url: 'https://medium.com/@setusairam5', color: 'hover:text-green-600 dark:hover:text-green-400' },
    { name: 'Photography', icon: Instagram, url: 'https://www.instagram.com/lyfofram.exe/', color: 'hover:text-purple-600 dark:hover:text-purple-400' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'setusairam5@gmail.com', href: 'mailto:setusairam5@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7XXXX XXX25', href: 'tel:+917XXXXXXX25' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Setu Sai Ram Y', href: 'https://www.linkedin.com/in/setusairam-y/' },
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
        'Frontend Web Development',
        'UI/UX Design',
        'Technical Writing & Documentation',
        'Brand Design & Marketing Designs',
        'Copy Writing & Ghost Writing'
      ],
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
    }
  ];

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1EOmXg02lqi5epZhs69g63qzGzkPDtBq2/view?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 animate-spin"></div>
        
        {/* Vector shapes */}
        <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-blue-200 dark:bg-blue-800 transform rotate-45 opacity-15 animate-spin"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-blue-300 dark:bg-blue-700 rounded-full opacity-15 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        {/* Main Content - Contact Left, Availability Right */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Half - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label} 
                    className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-2xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {info.label}
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
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Download Resume
              </h3>
              <button 
                onClick={handleResumeDownload}
                className="w-full bg-blue-600 dark:bg-blue-400 text-white dark:text-black py-4 px-6 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download size={24} />
                <span className="font-medium">Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Half - Availability */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Availability
              </h2>
              <div className="space-y-6">
                {availabilityInfo.map((item, index) => (
                  <div
                    key={item.type}
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                        <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
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
                        <div 
                          key={detail}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media - Full Width Bottom */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Connect With Me
            </h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group transform hover:scale-105"
                title={link.name}
              >
                <link.icon className={`w-10 h-10 mx-auto mb-3 text-gray-600 dark:text-gray-400 transition-colors ${link.color}`} />
                <p className={`text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors ${link.color}`}>
                  {link.name}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 dark:bg-blue-900/20 p-12 rounded-2xl border border-blue-200 dark:border-blue-800">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-white dark:text-black" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to start a conversation?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
          <a
            href="mailto:setusairam5@gmail.com"
            className="inline-block bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-8 py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Send me an email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;