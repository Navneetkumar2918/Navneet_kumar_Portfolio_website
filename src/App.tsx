import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showResumeModal, setShowResumeModal] = useState(false);

  const sections = ['Hero', 'About', 'Projects', 'Skills', 'Contact'];

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = sectionIds[i];
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSection = (section: string) => {
    switch(section) {
      case "Hero": return <Hero onResumeClick={() => setShowResumeModal(true)} />;
      case "About": return <About />;
      case "Projects": return <Projects />;
      case "Skills": return <Skills />;
      case "Contact": return <Contact />;
      default: return null;
    }
  };

  return (
    <div className={`relative ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-all duration-500">

        {/* Fixed Theme Toggle (border ke upar) */}
        <div className="fixed top-2 right-6 sm:right-10 md:right-12 lg:right-16 z-[60] scale-90">
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>

        {/* Header */}
        <Header activeSection={activeSection} />

        {/* Main Content */}
        <main>
          {sections.map((section) => (
            <div key={section}>{renderSection(section)}</div>
          ))}
        </main>

        {/* Resume Modal */}
        {showResumeModal && (
          <ResumeModal onClose={() => setShowResumeModal(false)} />
        )}

        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-3xl blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-teal-200/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-pink-200/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-yellow-200/20 dark:bg-yellow-500/10 rounded-3xl blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
