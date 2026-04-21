import Section from "./Section";
import ProjectCard from "./ProjectCard";
import FadeInView from "./FadeInView";
import { projects } from "../data/content";

const Projects = ({ isDark }) => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of my recent work in AI, ML, and software engineering"
      isDark={isDark}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <FadeInView key={project.title} delay={i * 0.08} amount={0.2}>
            <ProjectCard project={project} index={i} isDark={isDark} />
          </FadeInView>
        ))}
      </div>
    </Section>
  );
};

export default Projects;