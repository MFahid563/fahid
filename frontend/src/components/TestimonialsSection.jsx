import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager, TechCorp',
    content:
      'Qasim delivered our e-commerce platform ahead of schedule with exceptional quality. His attention to detail and problem-solving skills are outstanding.',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, StartupHub',
    content:
      'Working with Qasim was a pleasure. He not only implemented our requirements perfectly but also suggested improvements that enhanced our product.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            What clients and colleagues say about my work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: '0 10px 25px -5px rgba(225, 29, 72, 0.2)',
              }}
            >
              <div className="mb-6">
                <p className="text-slate-600 dark:text-slate-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center">
                <motion.div className="flex-shrink-0 mr-4" whileHover={{ rotate: 5 }}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-rose-400"
                  />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-rose-600 dark:text-rose-400">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-rose-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
