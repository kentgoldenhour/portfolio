import { motion } from "framer-motion";
import { FaTrophy, FaBook, FaGraduationCap, FaStar } from "react-icons/fa";
import Section from "./Section";
import FadeInView from "./FadeInView";
import { achievements } from "../data/content";

const typeConfig = {
  Competition: { icon: FaTrophy, color: "#fde68a" },
  Publication: { icon: FaBook, color: "#a5b4fc" },
  Academic: { icon: FaGraduationCap, color: "#86efac" },
  Leadership: { icon: FaStar, color: "#fca5a5" },
};

const Achievements = ({ isDark }) => {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Milestones and recognitions along the way"
      isDark={isDark}
    >
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {achievements.map((item, index) => {
          const config = typeConfig[item.type] || typeConfig.Competition;
          const Icon = config.icon;

          return (
            <FadeInView key={item.title} delay={index * 0.1} amount={0.2}>
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`relative rounded-2xl p-5 h-full transition-all duration-300 ${
                  isDark ? "glass glass-hover" : "glass-light glass-hover-light"
                }`}
                style={{
                  borderLeft: `3px solid ${config.color}`,
                }}
              >
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                    style={{
                      background: `${config.color}15`,
                      border: `1px solid ${config.color}30`,
                    }}
                  >
                    <Icon style={{ color: config.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className={`text-base font-semibold leading-snug ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span
                        className="flex-shrink-0 px-2 py-0.5 text-xs font-semibold rounded-full"
                        style={{
                          background: `${config.color}15`,
                          color: config.color,
                          border: `1px solid ${config.color}30`,
                        }}
                      >
                        {item.type}
                      </span>
                    </div>
                    <p
                      className={`text-sm font-medium mt-0.5 ${
                        isDark ? "text-light-400" : "text-gray-500"
                      }`}
                    >
                      {item.organization} · {item.date}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="my-3"
                  style={{
                    height: "1px",
                    background: isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)",
                  }}
                />

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-light-300" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            </FadeInView>
          );
        })}
      </div>
    </Section>
  );
};

export default Achievements;