import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const techColors = {
  Python: "from-blue-400 to-yellow-400",
  TensorFlow: "from-orange-400 to-orange-600",
  PyTorch: "from-red-400 to-orange-500",
  React: "from-cyan-400 to-blue-500",
  NLP: "from-green-400 to-emerald-500",
  CNN: "from-purple-400 to-pink-500",
  "Scikit-learn": "from-orange-300 to-blue-500",
  Flask: "from-gray-400 to-gray-600",
  FastAPI: "from-teal-400 to-green-500",
  Docker: "from-blue-400 to-blue-600",
  PostgreSQL: "from-blue-500 to-indigo-500",
  Redis: "from-red-400 to-red-600",
  XGBoost: "from-blue-400 to-green-400",
  OpenCV: "from-green-400 to-blue-500",
  YOLOv8: "from-purple-400 to-blue-500",
  Streamlit: "from-red-400 to-pink-500",
  ONNX: "from-gray-400 to-blue-400",
  "Hugging Face": "from-yellow-400 to-orange-400",
  AWS: "from-orange-400 to-yellow-500",
  MongoDB: "from-green-500 to-green-700",
  Plotly: "from-blue-400 to-purple-500",
  "Apache Airflow": "from-teal-400 to-blue-500",
};

const ProjectCard = ({ project, index, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`group relative rounded-2xl p-6 transition-all duration-500 gradient-border ${
        isDark ? "glass glass-hover" : "glass-light glass-hover-light"
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white">
            Featured
          </span>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <h3
          className={`text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-sm leading-relaxed mb-5 ${
            isDark ? "text-light-400" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-white/5 text-light-300 border-white/10 hover:border-primary-500/30"
                  : "bg-gray-100 text-gray-700 border-gray-200 hover:border-primary-500/30"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isDark
                ? "text-light-400 hover:text-primary-400"
                : "text-gray-500 hover:text-primary-600"
            }`}
          >
            <FaGithub size={16} /> Code
          </a>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? "text-light-400 hover:text-accent-400"
                  : "text-gray-500 hover:text-accent-600"
              }`}
            >
              <FaExternalLinkAlt size={14} /> Demo
            </a>
          )}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary-500/5 to-accent-500/5" />
    </motion.div>
  );
};

export default ProjectCard;