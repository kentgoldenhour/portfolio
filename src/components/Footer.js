import { personalInfo } from "../data/content";

const Footer = ({ isDark }) => {
  return (
    <footer
      className={`py-8 px-4 text-center border-t ${
        isDark ? "border-white/5 text-light-400" : "border-gray-200 text-gray-500"
      }`}
    >
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="gradient-text font-medium">{personalInfo.name}</span>.
        Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;