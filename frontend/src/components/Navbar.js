// src/components/Navbar.js
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = ({ activeSection }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Experience', path: 'experience' },
    { name: 'Contact', path: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarBackground = () => {
    if (!scrolled) return 'bg-transparent';

    const sectionColors = {
      'Home': 'bg-white/90 dark:bg-gray-900/90',
      'About': 'bg-slate-50/90 dark:bg-slate-900/90',
      'Skills': 'bg-gradient-to-b from-white to-slate-100/90 dark:from-slate-900/90 dark:to-slate-800/90',
      'Projects': 'bg-slate-50/90 dark:bg-slate-900/90',
      'Experience': 'bg-white/90 dark:bg-gray-900/90',
      'Testimonials': 'bg-slate-50/90 dark:bg-slate-800/90',
      'Blog': 'bg-white/90 dark:bg-slate-900/90',
      'Contact': 'bg-white/90 dark:bg-slate-800/90'
    };

    return sectionColors[activeSection] || 'bg-white/90 dark:bg-gray-900/90';
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()} backdrop-blur-sm shadow-sm`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="home" 
              smooth={true}
              duration={500}
              className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent cursor-pointer"
            >
              Muhammad Fahid
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Link
                  activeClass="text-red-500"
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className={`text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors font-medium cursor-pointer ${
                    activeSection === link.name ? 'text-red-500 dark:text-red-400' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Theme toggle for desktop */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 pb-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  activeClass="text-red-500"
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Theme toggle in mobile menu */}
              <div className="px-4 pt-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                >
                  {isDarkMode ? (
                    <>
                      <FiSun size={18} />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FiMoon size={18} />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
