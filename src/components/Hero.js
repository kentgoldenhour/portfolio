import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/content";

const greetings = [
  { prefix: "Hi, I'm ", name: personalInfo.name },
  { prefix: "你好，我是 ", name: personalInfo.name },
  { prefix: "こんにちは、", name: personalInfo.name + " です" },
  { prefix: "Halo, saya ", name: personalInfo.name },
  { prefix: "Bonjour, je suis ", name: personalInfo.name },
  { prefix: "Hola, soy ", name: personalInfo.name },
];

const TypingText = ({ isDark }) => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const current = greetings[greetingIndex];
    const fullText = current.prefix + current.name;

    const speed = isDeleting ? 30 : 80;
    const pauseAfterType = 2000;
    const pauseAfterDelete = 300;

    if (!isDeleting && displayText === fullText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseAfterType);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
      }, pauseAfterDelete);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, greetingIndex]);

  const current = greetings[greetingIndex];
  const fullPrefix = current.prefix;

  // Split displayText into prefix part and name part
  const prefixPart = displayText.substring(0, Math.min(displayText.length, fullPrefix.length));
  const namePart = displayText.substring(fullPrefix.length);

  return (
    <span>
      <span className={isDark ? "text-white" : "text-gray-900"}>
        {prefixPart}
      </span>
      <span className="gradient-text">{namePart}</span>
      <span
        className="inline-block w-[3px] ml-1 rounded-sm bg-gradient-to-b from-primary-400 to-accent-400"
        style={{
          height: "0.85em",
          verticalAlign: "baseline",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      />
    </span>
  );
};

const Hero = ({ isDark }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium border"
          style={{
            background: isDark ? "rgba(30,30,46,0.6)" : "rgba(255,255,255,0.7)",
            borderColor: isDark ? "rgba(99,102,241,0.2)" : "rgba(99,102,241,0.15)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className={isDark ? "text-light-300" : "text-gray-600"}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name with typing effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 min-h-[1.2em] ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          <TypingText isDark={isDark} />
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className={`text-xl sm:text-2xl font-medium mb-6 ${
            isDark ? "text-light-400" : "text-gray-500"
          }`}
        >
          {personalInfo.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={`text-lg max-w-2xl mx-auto mb-10 ${
            isDark ? "text-light-400" : "text-gray-500"
          }`}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className={`px-8 py-3 rounded-xl font-medium flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 border ${
              isDark
                ? "glass glass-hover text-white"
                : "glass-light glass-hover-light text-gray-800"
            }`}
          >
            <FaEnvelope />
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${
              isDark ? "border-light-400/30" : "border-gray-400/30"
            }`}
          >
            <motion.div className="w-1 h-2 rounded-full bg-gradient-to-b from-primary-400 to-accent-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;