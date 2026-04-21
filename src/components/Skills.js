import { motion } from "framer-motion";
import { createElement } from "react";
import Section from "./Section";
import FadeInView from "./FadeInView";
import { skills } from "../data/content";

const Skills = ({ isDark }) => {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with" isDark={isDark}>
      <div className="space-y-10">
        {Object.entries(skills).map(([category, items], catIndex) => (
          <FadeInView key={category} delay={catIndex * 0.1}>
            <h3 className={`text-lg font-semibold mb-5 ${isDark ? "text-white" : "text-gray-900"}`}>
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className={`relative rounded-xl p-4 text-center gradient-border transition-all duration-300 ${
                    isDark ? "glass glass-hover" : "glass-light glass-hover-light"
                  }`}
                >
                  <div className="text-2xl mb-2 flex justify-center text-primary-400">
                    {createElement(skill.icon)}
                  </div>
                  <p className={`text-sm font-medium ${isDark ? "text-light-300" : "text-gray-800"}`}>
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeInView>
        ))}
      </div>
    </Section>
  );
};

export default Skills;