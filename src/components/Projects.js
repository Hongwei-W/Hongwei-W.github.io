import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="Projects">
      {projects.map((project, index) => (
        <Project
          key={index}
          image={project.image}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          completionDate={project.completionDate}
          skillSet={project.skillSet}
          github={project.github}
          external={project.external}
          video={project.video}
          figma={project.figma}
          slides={project.slides}
          word={project.word}
        />
      ))}
    </div>
  );
};

export default Projects;
