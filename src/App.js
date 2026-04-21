import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Achievements from "./components/Achievements";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const handleThemeToggle = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div
        className={`relative min-h-screen transition-colors duration-500 ${
          isDark ? "bg-dark-400 text-white" : "bg-light-100 text-gray-900"
        }`}
      >
        {/* ===== Background Gradient Orbs ===== */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Top-left */}
          <div
            className={`absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[160px] animate-glow-pulse ${
              isDark ? "bg-primary-500/15" : "bg-primary-500/10"
            }`}
          />
          {/* Top-right */}
          <div
            className={`absolute top-20 -right-40 w-[400px] h-[400px] rounded-full blur-[140px] animate-glow-pulse ${
              isDark ? "bg-accent-500/15" : "bg-accent-500/10"
            }`}
            style={{ animationDelay: "2s" }}
          />
          {/* Center */}
          <div
            className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[180px] animate-glow-pulse ${
              isDark ? "bg-primary-600/10" : "bg-primary-500/8"
            }`}
            style={{ animationDelay: "1s" }}
          />
          {/* Middle-left */}
          <div
            className={`absolute top-1/2 -left-20 w-[350px] h-[350px] rounded-full blur-[130px] animate-glow-pulse ${
              isDark ? "bg-accent-600/12" : "bg-accent-500/8"
            }`}
            style={{ animationDelay: "3s" }}
          />
          {/* Bottom-right */}
          <div
            className={`absolute bottom-40 right-10 w-[450px] h-[450px] rounded-full blur-[150px] animate-glow-pulse ${
              isDark ? "bg-primary-500/12" : "bg-primary-500/8"
            }`}
            style={{ animationDelay: "2.5s" }}
          />
          {/* Bottom-left */}
          <div
            className={`absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[140px] animate-glow-pulse ${
              isDark ? "bg-accent-500/10" : "bg-accent-500/6"
            }`}
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* ===== Content ===== */}
        <div className="relative z-10">
          <Loader onComplete={() => setLoaded(true)} />

          {loaded && (
            <>
              <Navbar isDark={isDark} onThemeToggle={handleThemeToggle} />
              <Hero isDark={isDark} />
              <About isDark={isDark} />
              <Projects isDark={isDark} />
              <Experience isDark={isDark} />
              <Skills isDark={isDark} />
              <Achievements isDark={isDark} />
              <Contact isDark={isDark} />
              <Footer isDark={isDark} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;