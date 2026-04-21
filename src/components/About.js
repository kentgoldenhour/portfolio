import FadeInView from "./FadeInView";
import Section from "./Section";
import { personalInfo } from "../data/content";

const About = ({ isDark }) => {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better" isDark={isDark}>
      <div className="grid md:grid-cols-5 gap-8">
        <FadeInView direction="right" className="md:col-span-3">
          <div
            className={`rounded-2xl p-8 gradient-border h-full ${
              isDark ? "glass glass-hover" : "glass-light glass-hover-light"
            }`}
          >
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              A little about myself
            </h3>
            <p className={`leading-relaxed text-base ${isDark ? "text-light-400" : "text-gray-600"}`}>
              {personalInfo.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className={`text-sm font-medium ${isDark ? "text-light-400" : "text-gray-500"}`}>
                📍 {personalInfo.location}
              </span>
            </div>
          </div>
        </FadeInView>

        <FadeInView direction="left" delay={0.2} className="md:col-span-2">
          <div
            className={`rounded-2xl p-8 gradient-border h-full ${
              isDark ? "glass glass-hover" : "glass-light glass-hover-light"
            }`}
          >
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Interests & Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalInfo.interests.map((interest) => (
                <span
                  key={interest}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-primary-500/10 text-primary-400 border border-primary-500/20 hover:bg-primary-500/20"
                      : "bg-primary-500/10 text-primary-600 border border-primary-500/15 hover:bg-primary-500/15"
                  }`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </Section>
  );
};

export default About;