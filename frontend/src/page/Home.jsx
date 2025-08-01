// src/pages/Home.js
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import ExperienceSection from '../components/ExperienceSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import BlogSection from '../components/BlogSection.jsx';
import { useEffect } from 'react';

const Home = ({ setActiveSection }) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'blog', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
            setActiveSection(sectionName === 'Blog' ? 'Blog' : sectionName);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;