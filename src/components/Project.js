const Project = ({
  image,
  title,
  description,
  skillSet,
  github,
  external,
  video,
  figma,
  completionDate,
}) => {
  return (
    <div className="Project list-item section container-fluid">
      <div className="row">
        <div className="image col-4 overflow-hidden text-center">
          <img alt={image.alt} src={image.src} />
        </div>
        <div className="project col-8">
          <div className="row">
            <div className="col project-description flexbox-container">
              <div className="title t1 sub-list-item">{title}</div>
              <div className="description sub-list-item">{description}</div>
              <div className="skill-set sub-list-item">
                <span className="t2">Skill set</span>: {skillSet}
              </div>
              <div className="skill-set sub-list-item">
                <span className="t2">Completion Date</span>: {completionDate}
              </div>
            </div>

            <div className="col-1 project-link flexbox-container">
              {github && (
                <a href={github} target="_blank" title="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
              )}
              {external && (
                <a href={external} target="_blank" title="External Link">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
              {video && (
                <a href={video} target="_blank" title="Demo Video">
                  <i className="fa-solid fa-photo-film"></i>
                </a>
              )}
              {figma && (
                <a href={figma} target="_blank" title="Figma">
                  <i className="fa-brands fa-figma"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
