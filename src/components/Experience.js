import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Section from "./Section";
import { experiences } from "../data/content";

const tabs = ["All", "IT", "Non-IT"];
const INITIAL_SHOW = 3;

const Experience = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeTab === "All"
      ? experiences
      : experiences.filter((e) => e.type === activeTab);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);
  const hasMore = filtered.length > INITIAL_SHOW;

  const isIT = (type) => type === "IT";
  const isPresent = (period) => period.toLowerCase().includes("present");

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey so far"
    >
      {/* Tab Filter */}
      <div className="flex justify-center mb-12">
        <div
          className={`inline-flex rounded-xl p-1 ${
            isDark ? "glass" : "glass-light"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false);
              }}
              className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? "text-white"
                  : isDark
                  ? "text-light-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeExpTab"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

            {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        {displayed.length > 1 && (
          <div
            className="absolute left-4 w-px"
            style={{
              top: "2.25rem",
              bottom: "2.25rem",
              background: isDark
                ? "linear-gradient(180deg, rgba(99,102,241,0.4), rgba(168,85,247,0.4), rgba(99,102,241,0.4))"
                : "linear-gradient(180deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25), rgba(99,102,241,0.25))",
            }}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {displayed.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start mb-8 last:mb-0"
              >
                {/* Dot */}
                <div
                  className="absolute left-4 transform -translate-x-1/2 z-10"
                  style={{ top: "1.75rem" }}
                >
                  {isPresent(exp.period) && (
                    <div
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{
                        width: "14px",
                        height: "14px",
                        margin: "-1px",
                        background: isIT(exp.type)
                          ? "rgba(99,102,241,0.3)"
                          : "rgba(245,158,11,0.3)",
                      }}
                    />
                  )}
                  <div
                    className="w-3 h-3 rounded-full ring-4"
                    style={{
                      background: isIT(exp.type)
                        ? "linear-gradient(135deg, #6366f1, #818cf8)"
                        : "linear-gradient(135deg, #f59e0b, #f97316)",
                      boxShadow: isPresent(exp.period)
                        ? isIT(exp.type)
                          ? "0 0 16px rgba(99,102,241,0.6)"
                          : "0 0 16px rgba(245,158,11,0.6)"
                        : isIT(exp.type)
                        ? "0 0 8px rgba(99,102,241,0.3)"
                        : "0 0 8px rgba(245,158,11,0.3)",
                      ringColor: isDark
                        ? "rgba(10,10,20,0.8)"
                        : "rgba(248,249,252,0.8)",
                    }}
                  />
                </div>

                {/* Connector line */}
                <div
                  className="absolute h-px"
                  style={{
                    left: "1.25rem",
                    top: "2rem",
                    width: "1.5rem",
                    background: isIT(exp.type)
                      ? "linear-gradient(90deg, rgba(99,102,241,0.5), rgba(99,102,241,0.1))"
                      : "linear-gradient(90deg, rgba(245,158,11,0.5), rgba(245,158,11,0.1))",
                  }}
                />

                {/* Card */}
                <div className="ml-12 flex-1">
                  <motion.div
                    whileHover={{ y: -3, scale: 1.005 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`rounded-2xl p-5 transition-all duration-300 ${
                      isDark ? "glass" : "glass-light"
                    }`}
                    style={{
                      borderLeft: `3px solid ${
                        isIT(exp.type)
                          ? "rgba(99,102,241,0.5)"
                          : "rgba(245,158,11,0.5)"
                      }`,
                      boxShadow: isDark
                        ? isIT(exp.type)
                          ? "0 4px 24px rgba(99,102,241,0.08), 0 1px 3px rgba(0,0,0,0.3)"
                          : "0 4px 24px rgba(245,158,11,0.08), 0 1px 3px rgba(0,0,0,0.3)"
                        : isIT(exp.type)
                        ? "0 4px 24px rgba(99,102,241,0.06), 0 1px 3px rgba(0,0,0,0.06)"
                        : "0 4px 24px rgba(245,158,11,0.06), 0 1px 3px rgba(0,0,0,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = isDark
                        ? isIT(exp.type)
                          ? "0 8px 32px rgba(99,102,241,0.2), 0 2px 8px rgba(0,0,0,0.4)"
                          : "0 8px 32px rgba(245,158,11,0.2), 0 2px 8px rgba(0,0,0,0.4)"
                        : isIT(exp.type)
                        ? "0 8px 32px rgba(99,102,241,0.12), 0 2px 8px rgba(0,0,0,0.08)"
                        : "0 8px 32px rgba(245,158,11,0.12), 0 2px 8px rgba(0,0,0,0.08)";
                      e.currentTarget.style.borderLeftColor = isIT(exp.type)
                        ? "rgba(99,102,241,0.8)"
                        : "rgba(245,158,11,0.8)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = isDark
                        ? isIT(exp.type)
                          ? "0 4px 24px rgba(99,102,241,0.08), 0 1px 3px rgba(0,0,0,0.3)"
                          : "0 4px 24px rgba(245,158,11,0.08), 0 1px 3px rgba(0,0,0,0.3)"
                        : isIT(exp.type)
                        ? "0 4px 24px rgba(99,102,241,0.06), 0 1px 3px rgba(0,0,0,0.06)"
                        : "0 4px 24px rgba(245,158,11,0.06), 0 1px 3px rgba(0,0,0,0.06)";
                      e.currentTarget.style.borderLeftColor = isIT(exp.type)
                        ? "rgba(99,102,241,0.5)"
                        : "rgba(245,158,11,0.5)";
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h3
                          className={`text-lg font-semibold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className={`font-medium text-sm ${
                            isIT(exp.type)
                              ? "text-primary-400"
                              : "text-amber-400"
                          }`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2 py-0.5 text-xs font-semibold rounded-full"
                          style={{
                            background: isIT(exp.type)
                              ? "rgba(99,102,241,0.15)"
                              : "rgba(245,158,11,0.15)",
                            color: isIT(exp.type) ? "#818cf8" : "#fbbf24",
                            border: `1px solid ${
                              isIT(exp.type)
                                ? "rgba(99,102,241,0.3)"
                                : "rgba(245,158,11,0.3)"
                            }`,
                          }}
                        >
                          {exp.type === "IT" ? "💻 IT" : "🌟 Non-IT"}
                        </span>
                        <span
                          className={`text-xs font-mono whitespace-nowrap ${
                            isDark ? "text-light-400" : "text-gray-500"
                          }`}
                        >
                          {exp.period}
                        </span>
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
                    <ul className="space-y-1.5">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`text-sm flex gap-2 ${
                            isDark ? "text-light-100" : "text-gray-900"
                          }`}
                        >
                          <span
                            className={`mt-1 flex-shrink-0 ${
                              isIT(exp.type)
                                ? "text-primary-400"
                                : "text-amber-400"
                            }`}
                          >
                            ▹
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-md"
                          style={{
                            background: isIT(exp.type)
                              ? "rgba(99,102,241,0.1)"
                              : "rgba(245,158,11,0.1)",
                            color: isIT(exp.type) ? "#818cf8" : "#fbbf24",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More / Less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "glass glass-hover text-light-300 hover:text-white"
                  : "glass-light glass-hover-light text-gray-600 hover:text-gray-900"
              }`}
            >
              {showAll ? (
                <>
                  Show Less <FaChevronUp size={12} />
                </>
              ) : (
                <>
                  Show More ({filtered.length - INITIAL_SHOW} more)
                  <FaChevronDown size={12} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default Experience;