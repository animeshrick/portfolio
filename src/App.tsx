import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Smartphone,
  Calendar,
  MapPin,
  ChevronRight,
  Award,
  BookOpen,
  Users
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Flutter/Dart', level: 95, icon: Smartphone },
    { name: 'Python/Django', level: 90, icon: Code2 },
    { name: 'BLoC/Provider', level: 88, icon: Code2 },
    { name: 'REST APIs/GraphQL', level: 85, icon: Database },
    { name: 'Databases: PostgreSQL, SQLite, Hive, Firebase Realtime Database', level: 80, icon: Database },
    { name: 'AI/ML', level: 80, icon: Code2 },
  ];

  const experiences = [
    {
      title: 'Application Developer',
      company: 'SastaSundar Healthbuddy Limited',
      period: 'Sept, 2022 – Now',
      location: 'Kolkata, WB',
      description: 'Developing and maintaining multiple Flutter applications with hybrid architecture, implementing clean code practices and CI/CD pipelines.',
      achievements: [
        'Retailer Shakti B2B App: Converted from Native Kotlin to Flutter hybrid architecture with PHP/Python backend',
        'Retailer Shakti Delivery App: Implemented real-time socket connections for delivery partner notifications',
        'Genubuddy: Flutter app with Provider state management, Python backend integration',
        'Sastasundar B2C: Implementing BLoC pattern and clean architecture for Android, iOS, and web',
        'Sastasundar Healthbuddy: BLoC pattern implementation for Health Buddies interaction system',
        'Sastasundar Delivery App: Flutter app with Hive local storage and BLoC state management',
        'Implemented unit testing, integration testing, and CI/CD with GitHub Actions'
      ]
    },
    {
      title: 'Android & iOS Developer',
      company: 'RDQ Tradingswala',
      period: 'Sept, 2021 - Aug, 2022',
      location: 'Kolkata, WB',
      description: 'Developed hybrid Flutter applications with clean architecture and Python backend integration.',
      achievements: [
        'RDQ Finserv B2C App: Clean code hybrid architecture using Flutter with Python backend',
        'RDQ Tradingswala: Informative application with hybrid Flutter architecture'
      ]
    },
    {
      title: 'Flutter Developer',
      company: 'Swadesh Softewares Pvt. Ltd.',
      period: 'Dec, 2019 - Mar, 2021',
      location: 'Durgapur, WB',
      description: 'Developed multiple B2C applications using Flutter with various state management solutions and Firebase integration.',
      achievements: [
        'Altezer B2C App: Local storage, Firebase authentication with GetX state management',
        'Choice Foundation B2C App: API implementations with GetX, custom UI-UX design',
        'Virupaaksh B2C App: Android-only Flutter application delivered single-handedly on time'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'Other Projects',
      period: 'Various',
      location: 'Remote',
      description: 'Developed RESTful APIs using Django and Django REST Framework for various applications.',
      achievements: [
        'SplitIT: Expense-sharing Django Backend (DRF) with authentication, user roles, and secure payment tracking',
        'JobScout: Job Board API using Django with authentication and live database hosting',
        'Optimized database queries for better performance and documented API endpoints'
      ]
    }
  ];

  const projects = [
    {
      title: 'RetailerShakti B2B Application',
      description: 'A comprehensive B2B mobile application for retailers, initially developed in Native Kotlin and successfully converted to Flutter hybrid architecture. Features real-time order management, inventory tracking, and seamless integration with PHP/Python backend systems.',
      technologies: ['Flutter', 'Dart', 'Kotlin', 'Flutter Web', 'Python', 'REST APIs', 'Socket.io'],
      image: 'https://play-lh.googleusercontent.com/g43aeeaffQLoh1Pn5QqztzW2e7gnP6VylwCckXPqcNrdO8uMt3fKdOfTaQtFDiLxcoI',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'RetailerShakti Delivery App',
      description: 'Real-time delivery management application with socket connections enabling delivery partners to receive instant notifications while performing tasks. Built with Flutter hybrid architecture for optimal performance.',
      technologies: ['Flutter', 'Dart', 'Socket.io', 'Real-time Notifications', 'Location Services'],
      image: 'https://play-lh.googleusercontent.com/yo5B1qy26BXt5X-wcxeT-Riss9uUwrobfP7SJL98M9JMKzEtnyvHIiTHESCPhYMLzQo',
      github: '#',
      live: '#'
    },
    {
      title: 'Sastasundar App',
      description: 'B2C application implementing BLoC pattern and clean architecture for a robust and scalable solution. Available on Android, iOS and mobile website with comprehensive health and wellness features.',
      technologies: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Android', 'iOS', 'Web'],
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9c/7b/c2/9c7bc245-7e9e-68b1-471c-cd5f0fb6c863/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png',
      github: '#',
      live: '#'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Animesh Banerjee
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {['home', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
                Animesh Banerjee
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              <strong>Application Developer</strong> delivering scalable, production-grade <strong>Flutter</strong> applications across Android, iOS, and Web platforms. 
              Proven track record of architecting modular, maintainable mobile systems and optimizing performance at scale with thousands of daily users. 
              Skilled in AI-assisted development workflows, <strong>Python</strong>/<strong>Django</strong> backend integration, and advanced state management (BLoC, Provider).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <Icon className="text-blue-600 mr-3" size={24} />
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 block">{skill.level}% Proficiency</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey of continuous learning and impactful contributions
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-2">
                      <span className="font-medium text-blue-600 mr-4">{exp.company}</span>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span className="mr-4">{exp.period}</span>
                        <MapPin size={16} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight size={16} className="text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of recent work demonstrating technical expertise and creative problem-solving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                project.featured ? 'ring-2 ring-blue-500 ring-opacity-50 shadow-xl' : ''
              }`}>
                {project.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 text-center font-semibold">
                    ⭐ FEATURED PROJECT
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={`text-sm px-3 py-1 rounded-full ${
                        project.featured 
                          ? 'bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 font-medium' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect & Discuss Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm actively seeking new opportunities to contribute my expertise to innovative projects. Ready to discuss how my skills in cross-platform development, clean architecture, and team collaboration can add value to your organization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">animeshece1998@gmail.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600">linkedin.com/in/animesh-banerjee-747012137</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
                <p className="text-gray-600">github.com/animeshRick</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">9475382132</p>
                <p className="text-gray-600">7003158590</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=animeshece1998@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Animesh,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%0A%0A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <Mail size={20} className="mr-2" />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Animesh Banerjee. Crafted with passion and attention to detail.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;