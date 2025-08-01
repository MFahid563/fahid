// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';
import Home from './page/Home.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const sectionTitles = {
    'Home': 'Muhammad Fahid | Business & Web Developer',
    'About': 'About Me | Muhammad Fahid - Professional Developer',
    'Skills': 'Technical Skills | Muhammad Fahid',
    'Projects': 'Projects | Muhammad Fahid Portfolio',
    'Experience': 'Experience & Education | Muhammad Fahid',
    'Testimonials': 'Client Testimonials | Muhammad Fahid',
    'Blog': 'Blog & Insights | Muhammad Fahid',
    'Contact': 'Contact Me | Muhammad Fahid'
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Helmet>
            <title>{sectionTitles[activeSection] || 'Muhammad Fahid | Portfolio'}</title>
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
