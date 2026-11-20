import { FaPython } from "@react-icons/all-files/fa/FaPython";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaDocker } from "@react-icons/all-files/fa/FaDocker";
import { FaGitAlt } from "@react-icons/all-files/fa/FaGitAlt";
import { FaDatabase } from "@react-icons/all-files/fa/FaDatabase";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { SiTensorflow } from "@react-icons/all-files/si/SiTensorflow";
import { SiPytorch } from "@react-icons/all-files/si/SiPytorch";
// import { SiScikitlearn } from "@react-icons/all-files/si/SiScikitlearn";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiKeras } from "@react-icons/all-files/si/SiKeras";
// import { SiPandas } from "@react-icons/all-files/si/SiPandas";
// import { SiNumpy } from "@react-icons/all-files/si/SiNumpy";
import { SiJupyter } from "@react-icons/all-files/si/SiJupyter";
// import { SiStreamlit } from "@react-icons/all-files/si/SiStreamlit";
import { SiCplusplus } from "@react-icons/all-files/si/SiCplusplus";
import { SiC } from "@react-icons/all-files/si/SiC";
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
  github: "https://github.com/kentgoldenhour",
  linkedin: "https://linkedin.com/in/kent-alber-fredson",
  location: "Jakarta, Indonesia",
};

export const projects = [
  {
    title: "Zero-Shot Choir Voice Synthesis",
    description:
      "An end-to-end generative audio system for zero-shot multi-singer choir synthesis, integrating automatic SATB harmony generation, ECAPA-TDNN speaker embeddings, expressive pitch/style modeling, Latent Diffusion Transformers (DiT), and BigVGAN vocoding.",
    techStack: ["Python", "PyTorch", "Diffusion Models", "ECAPA-TDNN", "BigVGAN", "Audio ML"],
    // github: "#",
    // demo: "#",
    image: null,
    featured: true,
  },
  {
    title: "Offline Handwritten Chinese Calligraphy Digitization",
    description:
      "A computer vision web application comparing ResNet-18 and ConvNeXt-Tiny architectures trained on CASIA-HWDB1.0 to digitize handwritten Chinese calligraphy characters via image upload or live sketchpad input.",
    techStack: ["Python", "PyTorch", "Torchvision", "ConvNeXt", "ResNet-18", "Gradio", "Hugging Face"],
    // github: "#",
    demo: "https://huggingface.co/spaces/duckieee/chinese-handwriting-recognition", 
    image: null,
    featured: true,
  },
  {
    title: "AI-Generated Text Detection",
    description:
      "A multi-input deep learning detector built with TensorFlow/Keras that fuses tokenized text sequences with 18 phonological, morphological, syntactic, and lexical linguistic features (via spaCy, NLTK, and pronouncing) to classify human vs. LLM-generated text.",
    techStack: ["Python", "TensorFlow", "Keras", "spaCy", "NLTK", "Scikit-learn", "Gradio"],
    github: "https://github.com/kentgoldenhour/robust-llm-detector",
    demo: "https://huggingface.co/spaces/duckieee/llm_detector_improved_ai_catcher",
    image: null,
    featured: true,
  },
  {
    title: "Enterprise AI Tutoring Agent (RAG)",
    description:
      "An AI-powered academic tutoring agent built with Azure AI Foundry, implementing automated knowledge retrieval across 70+ course documents to deliver contextual support for over 13,600 university students.",
    techStack: ["Azure AI Foundry", "RAG", "LLMs", "C#", "Azure Functions", "REST APIs"],
    // github: "#",
    // demo: "#",
    image: null,
    featured: false,
  },
  {
    title: "Near-Real-Time Banking Fraud Data Streaming & Feature Validation",
    description:
      "Implemented near-real-time transaction data processing and automated feature validation using Confluent Kafka and Apache Flink across two major banking channels to standardize data quality checks for downstream fraud detection models.",
    techStack: ["Python", "Apache Kafka", "Apache Flink", "SQL", "Feature Engineering"],
    // github: "#",
    // demo: "#",
    image: null,
    featured: false,
  },
  {
    title: "Banking Fraud Analytics Dashboard",
    description:
      "An interactive business intelligence and risk monitoring dashboard analyzing transaction anomalies, high-risk channel patterns, fraud rate trends, and suspicious user behavior metrics to support data-driven fraud mitigation.",
    techStack: ["Power BI", "SQL", "Python", "Data Visualization", "Fraud Analytics"], // Sesuaikan tool BI jika pakai Looker Studio/Tableau
    // github: "#",
    demo: "https://app.powerbi.com/groups/me/reports/b9910673-c88b-4f1a-8e45-bcc4b01bfeba/25d92d2baa5d10200300?experience=power-bi", 
    image: null,
    featured: false,
  },
  {
    title: "Big Five Personality Classification (DistilBERT vs. Bi-GRU)",
    description:
      "A multi-label psycholinguistic classification study comparing custom attention-augmented DistilBERT (with 1024-token windowing) and Bi-GRU models on the Essays-Big5 dataset, utilizing Optuna hyperparameter tuning and per-trait dynamic thresholding to achieve a 0.62 macro F1-score matching SOTA benchmarks.",
    techStack: ["Python", "PyTorch", "Hugging Face Transformers", "DistilBERT", "Bi-GRU", "Optuna"],
    // github: "",
    // demo: "#",
    image: null,
    featured: true,
  },
  {
    title: "Spotify Music & Streaming Analytics Dashboard",
    description:
      "An exploratory data analytics dashboard uncovering listener engagement trends, track audio feature distributions (danceability, energy, tempo), top artist performance, and genre popularity insights.",
    techStack: ["Power BI", "SQL", "Python", "Data Cleaning", "Exploratory Data Analysis"], // Sesuaikan tool BI jika pakai Looker Studio/Tableau
    // github: "#",
    demo: "https://datastudio.google.com/u/0/reporting/fe6c3dc5-8316-4e83-a171-92a5a348acc9/page/SMLDG", // Bisa diisi link publikasi Power BI / Looker Studio jika ada
    image: null,
    featured: false,
  },
];

export const experiences = [
  {
    role: "Programmer",
    company: "IT Division BINUS Online",
    period: "Aug 2025 – Aug 2026",
    type: "IT",
    description: [
      "Built an AI-powered tutoring agent using Azure AI Foundry, implementing automated knowledge retrieval to provide contextual course support across 70+ documents for 13600+ students.",
      "Reduced critical API response times by 80% by refactoring inefficient SQL queries and optimizing backend processing, improving system performance during peak student traffic.",
      "Resolved production issues across university web platforms by debugging application, API, and database failures, improving system reliability and reducing recurring operational issues.",
    ],
    techUsed: ["C#", "dotnet", "React", "Git"],
  },
  {
    role: "Public Relations Staff",
    company: "Koko Cici Jakarta",
    period: "Sept 2025 – Present",
    type: "Non-IT",
    description: [
      "Secured and managed 20+ corporate sponsorships and cross-industry partnerships, coordinating stakeholder deliverables and supporting external funding initiatives.",
      "Spearheaded the Mid-Autumn (Mooncake) Festival event as Project Manager, overseeing end-to-end event, execution, cross-division operations, and stakeholder coordination."
    ],
    techUsed: ["Excel", "Communication", "Public Speaking", "Content Creation", "Event Management", "Leadership", "Acting"],
  },
  {
    role: "Data Scientist Intern",
    company: "Bank Central Asia (BCA)",
    period: "Feb 2025 – Aug 2025",
    type: "IT",
    description: [
      "Built near-real-time transaction data pipelines using Confluent Kafka and Apache Flink to process fraud detection data across two major banking channels, enabling low-latency data delivery for downstream ML workflows.",
      "Engineered automated preprocessing and feature validation pipelines for high-volume banking transactions, standardizing data quality checks and feature consistency for production fraud detection workflows.",
      "Documented fraud detection model architecture, data flows, and governance processes to support knowledge transfer and operational consistency across stakeholders.",
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
      "Developed and maintained internal developer applications using Dart, Flutter, and C, contributing to software features and platform reliability.",
      "Participated in cross-functional code reviews and engineering workshops covering .NET, Azure, Git, and software design patterns.",
      "Created engineering documentation and onboarding guides that standardized development workflows across student developer teams.",
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
    // { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Keras", icon: SiKeras },
    // { name: "OpenCV", icon: SiOpencv },
    // { name: "Pandas", icon: SiPandas },
    // { name: "NumPy", icon: SiNumpy },
  ],
  "Tools & Frameworks": [
    { name: "React", icon: FaReact },
    // { name: "Node.js", icon: FaNodeJs },
    // { name: "FastAPI", icon: SiFastapi },
    // { name: "Flask", icon: SiFlask },
    { name: "Docker", icon: FaDocker },
    { name: "Git", icon: FaGitAlt },
    // { name: "AWS", icon: FaAws },
    // { name: "Streamlit", icon: SiStreamlit },
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