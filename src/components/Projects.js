import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="Projects" id="PROJECT">
      {projects.map((project, index) => (
        <Project
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          completionDate={project.completionDate}
          skillSet={project.skillSet}
          github={project.github}
          external={project.external}
          video={project.video}
          figma={project.figma}
        />
      ))}
    </div>
  );
};

export default Projects;
