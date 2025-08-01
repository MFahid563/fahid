// src/pages/Home.js
import HeroSection from '../components/HeroSection.js';
import AboutSection from '../components/AboutSection.js';
import SkillsSection from '../components/SkillsSection.js';
import ProjectsSection from '../components/ProjectsSection.js';
import ExperienceSection from '../components/ExperienceSection.js';
import TestimonialsSection from '../components/TestimonialsSection.js';
import BlogSection from '../components/BlogSection.js';
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