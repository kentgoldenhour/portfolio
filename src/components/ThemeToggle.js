import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`relative w-14 h-7 rounded-full p-1 transition-colors duration-300 ${
        isDark
          ? "bg-dark-100 border border-primary-500/30"
          : "bg-light-200 border border-primary-500/20"
      }`}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className={`w-5 h-5 rounded-full flex items-center justify-center ${
          isDark
            ? "bg-gradient-to-r from-primary-500 to-accent-500"
            : "bg-gradient-to-r from-yellow-400 to-orange-400"
        }`}
        animate={{ x: isDark ? 26 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <FaMoon className="text-white text-xs" />
        ) : (
          <FaSun className="text-white text-xs" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;