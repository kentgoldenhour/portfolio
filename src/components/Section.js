import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children, className = "", isDark }) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-3xl sm:text-4xl font-bold inline-block mb-4 ${
                isDark !== false ? "gradient-text" : "gradient-text-light"
              }`}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={`max-w-2xl mx-auto text-lg ${
                  isDark !== false ? "text-light-400" : "text-gray-500"
                }`}
              >
                {subtitle}
              </p>
            )}
            <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;