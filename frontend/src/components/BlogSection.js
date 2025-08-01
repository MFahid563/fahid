import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPenNib } from 'react-icons/fa';

const blogPosts = [
  {
    title: 'Building Web Platforms That Drive Business Growth',
    slug: '3d-portfolio-react-three-fiber',
    excerpt: 'Learn how to develop scalable web platforms that solve real business problems and accelerate digital success..',
    date: 'July 2025'
  },
  {
    title: ' Full-Stack’s Role in Business Success',
    slug: 'why-mern-for-scalable-web',
    excerpt: 'Explore how combining technical expertise with business strategy creates impactful, growth-oriented digital products.',
    date: 'June 2025'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3">
            <FaPenNib className="text-rose-600" /> Blog Insights
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full mt-4"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-xl mx-auto">
            Actionable insights & tutorials on full-stack development, digital business growth, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-rose-300 dark:hover:shadow-rose-600 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-rose-600 mb-2">{post.date}</p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-rose-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;