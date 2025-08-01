// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const sectionTitles = {
    'Home': 'Qasim Ali | 3D Web & MERN Stack Developer',
    'About': 'About Me | Qasim Ali - Professional Developer',
    'Skills': 'Technical Skills | Qasim Ali',
    'Projects': 'Projects | Qasim Ali Portfolio',
    'Experience': 'Experience & Education | Qasim Ali',
    'Testimonials': 'Client Testimonials | Qasim Ali',
    'Blog': 'Blog & Insights | Qasim Ali',
    'Contact': 'Contact Me | Qasim Ali'
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Helmet>
            <title>{sectionTitles[activeSection] || 'Qasim Ali | Portfolio'}</title>
            <meta name="description" content="Professional MERN Stack Developer with expertise in React, Node.js, and MongoDB" />
          </Helmet>
          <Navbar activeSection={activeSection} />
          <Home setActiveSection={setActiveSection} />
       
        
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
