import {
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaDatabase,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiKeras,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiStreamlit,
  SiFastapi,
  SiFlask,
  SiCplusplus,
  SiCsharp,
  SiC,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export const personalInfo = {
  name: "Kent Alber Fredson",
  title: "Master’s Student | Data Analyst, Business Intelligence, & AI Enthusiast",
  tagline: "Miracle happens",
  bio: `A hardworking and enthusiastic master student at BINUS University with strong time management skills
    and a proven ability to excel in both academic and non-academic activities. Actively involved in collaborative
    projects and organizational roles, demonstrating adaptability, professionalism, and a strong sense of responsibility in
    delivering quality work. Currently focusing on Artificial Intelligence, Data Science, and Business Intelligence,
    with a growing passion for building data-driven solutions, extracting insights from complex datasets, and applying
    analytical thinking to solve real-world problems and support strategic decision-making.`,
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analysis",
    "Data Engineering",
    "Business Intelligence",
  ],
  email: "kentalberfredson@gmail.com",
  github: "https://github.com/kent-fredson1-SSGBION2",
  linkedin: "https://linkedin.com/in/kent-alber-fredson",
  location: "Jakarta, Indonesia",
};

export const projects = [
  {
    title: "AI-Generated Text Detection",
    description:
      "A hybrid deep learning system combining CNN architectures with linguistic feature extraction to detect AI-generated text. Achieves 96.5% accuracy on benchmark datasets using ensemble methods.",
    techStack: ["Python", "TensorFlow", "NLP", "CNN", "Scikit-learn", "Flask"],
    github: "https://github.com/kent-fredson1-SSGBION2/ai-text-detection",
    demo: "#",
    image: null,
    // featured: true,
  },
  {
    title: "TRUST - Anti-Fraud Transaction System",
    description:
      "Real-time fraud detection platform using gradient boosting and anomaly detection algorithms. Processes 10K+ transactions/sec with <50ms latency and 99.2% precision.",
    techStack: [
      "Python",
      "XGBoost",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Redis",
    ],
    github: "https://github.com/kent-fredson1-SSGBION2/trust-antifraud",
    demo: "#",
    image: null,
    // featured: true,
  },
  {
    title: "Safety Helmet Detection System",
    description:
      "Computer vision pipeline for real-time safety helmet detection on construction sites using YOLOv8. Deployed on edge devices with optimized inference for 30+ FPS.",
    techStack: ["Python", "PyTorch", "OpenCV", "YOLOv8", "Streamlit", "ONNX"],
    github: "https://github.com/kent-fredson1-SSGBION2/helmet-detection",
    demo: "#",
    image: null,
    // featured: true,
  },
  {
    title: "NLP Sentiment Analyzer",
    description:
      "Multi-language sentiment analysis tool using transformer models (BERT, RoBERTa) with fine-tuning on domain-specific corpora. Supports 12 languages.",
    techStack: ["Python", "Hugging Face", "PyTorch", "React", "FastAPI"],
    github: "https://github.com/kent-fredson1-SSGBION2/sentiment-analyzer",
    demo: "#",
    image: null,
    // featured: false,
  },
  {
    title: "Data Pipeline Orchestrator",
    description:
      "Scalable ETL pipeline framework with automated data validation, transformation, and loading. Built with modular architecture supporting multiple data sources.",
    techStack: ["Python", "Apache Airflow", "AWS", "PostgreSQL", "Docker"],
    github: "https://github.com/kent-fredson1-SSGBION2/data-pipeline",
    demo: "#",
    image: null,
    // featured: false,
  },
  {
    title: "Interactive ML Dashboard",
    description:
      "Real-time machine learning model monitoring dashboard with drift detection, performance metrics, and automated retraining triggers.",
    techStack: ["React", "Python", "Streamlit", "Plotly", "MongoDB"],
    github: "https://github.com/kent-fredson1-SSGBION2/ml-dashboard",
    demo: "#",
    image: null,
    // featured: false,
  },
];

export const experiences = [
  {
    role: "Programmer",
    company: "IT Division BINUS Online",
    period: "Aug 2025 – Present",
    type: "IT",
    description: [
      "Developed and enhanced features for online examination and academic service systems to improve functionality and user experience",
      "Resolved 10+ technical issues through debugging and optimization, contributing to system stability and performance",
      "Explored AI agent technologies for future applications"
    ],
    techUsed: ["C#", "dotnet", "React", "Git"],
  },
  {
    role: "Public Relations Staff",
    company: "Koko Cici Jakarta",
    period: "Sept 2025 – Present",
    type: "Non-IT",
    description: [
      "Led Mooncake Festival event, managing and coordinating a team of 30+ committee members",
      "Secured 10+ sponsors and media partners for a Chinese New Year celebration event",
      "Assisted in creating engaging content for promotional and education purposes across event platforms",
      "Performed in a musical drama production"
    ],
    techUsed: ["Excel", "Communication", "Public Speaking", "Content Creation", "Event Management", "Leadership", "Acting"],
  },
  {
    role: "Data Scientist Intern",
    company: "Bank Central Asia (BCA)",
    period: "Feb 2025 – Aug 2025",
    type: "IT",
    description: [
      "Explored how Redis can be implemented within a detection system.",
      "Explored and applied Near Real-Time (NRT) modeling using Confluent Kafka and Flink for fraud detection using tabular banking data to 2 BCA channels.",
      "Created 3 technical documentation detailing model architecture and data pipelines for internal use.",
      "Designed 3 UI/UX mockups for dashboards to enhance user experience and functionality.",
    ],
    techUsed: ["Python", "Kafka", "Redis", "Docker", "Figma"],
  },
  {
    role: "Manager of Entrepreneurship and Relations",
    company: "BINUS Mandarin Club",
    period: "Feb 2024 – Jan 2025",
    type: "Non-IT",
    description: [
      "Led a national competition event which consists of 40+ committee members.",
      "Engaged in and negotiated partnership agreements with over 10 media partners.",
      "Managed the organization's social media platforms and created 2 articles."
    ],
    techUsed: ["Leadership", "Project Management", "Event Management", "Public Speaking", "Partnership", "Writing"],
  },
  {
    role: "Chairman",
    company: "BINUS Square Student Committee",
    period: "Dec 2023 – Dec 2024",
    type: "Non-IT",
    description: [
      "Successfully served as Project Manager for 3 events, achieving an average KPI score of 5.37 / 6.00.",
      "Conducted training sessions on 4 different topics, earning an overall satisfaction score of 4.85 / 5.00.",
      "Supervised all divisions and provided advisory support across all events."
    ],
    techUsed: ["Leadership", "Project Management", "Event Management", "Public Speaking", "Training & Development"],
  },
  {
    role: "Academic Mentor",
    company: "BINUS University",
    period: "Mar 2024 – July 2024",
    type: "Non-IT",
    description: [
      "Became mentor for a 3-people study group (with 5 mentees as additionals).",
      "Assisted in mentoring Calculus, Data Structure, Scientific Computing, and Object Oriented Programming.",
      "Conducted 4-to-5-hour intensive sessions during exam period.",
    ],
    techUsed: ["Calculus", "OOP", "Scientific Computing", "Data Structures"],
  },
  {
    role: "Associate Member of Software Engineer",
    company: "IT Division BINUS",
    period: "Mar 2023 – Feb 2024",
    type: "IT",
    description: [
      "Updated and managed more than 2 documentation projects.",
      "Developed a website (DevBees) over 3 sprints, including updating endpoints, creating a landing page, and adding various features & user access control.",
    ],
    techUsed: ["C#", "dotnet", "Dart", "Flutter", "Git"],
  }  
];

export const skills = {
  "Programming Languages": [
    { name: "Python", icon: FaPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "C", icon: SiC },
    { name: "C#", icon: TbBrandCSharp },
    { name: "C++", icon: SiCplusplus },
    // { name: "TypeScript", icon: SiTypescript },
    { name: "SQL", icon: FaDatabase },
    { name: "HTML/CSS", icon: FaHtml5 },
  ],
  "ML / AI / Data": [
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Keras", icon: SiKeras },
    // { name: "OpenCV", icon: SiOpencv },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
  ],
  "Tools & Frameworks": [
    { name: "React", icon: FaReact },
    // { name: "Node.js", icon: FaNodeJs },
    // { name: "FastAPI", icon: SiFastapi },
    // { name: "Flask", icon: SiFlask },
    { name: "Docker", icon: FaDocker },
    { name: "Git", icon: FaGitAlt },
    // { name: "AWS", icon: FaAws },
    { name: "Streamlit", icon: SiStreamlit },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    // { name: "Linux", icon: FaLinux },
    // { name: "MongoDB", icon: SiMongodb },
    // { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Jupyter", icon: SiJupyter },
  ],
};

export const achievements = [
  {
    title: "Dean's List",
    organization: "School of Computer Science BINUS University",
    date: "2025",
    description: "Top 25% GPA throughout the faculty",
    type: "Academic",
  },
  {
    title: "Koko Favorit 2025",
    organization: "Koko Cici Jakarta",
    date: "2025",
    description: "Got the most votes out of all finalists",
    type: "Competition",
  },
  {
    title: "Best BINUS Square Ambassador",
    organization: "BINUS Square",
    date: "2024",
    description: "Best KPIs of all 25 ambassadors",
    type: "Academic",
  },
  {
    title: "The Most Favorite Male of BINUS Career Ambassador",
    organization: "BINUS Career",
    date: "2024",
    description: "Got the most votes and interactions on social media and final day",
    type: "Competition",
  },
  {
    title: "Bronze Award Paper in Medical Informatics Category ",
    organization: "ICEBEHI",
    date: "2024",
    description: "Top 3 paper in the category with 50+ submissions",
    type: "Publication",
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];