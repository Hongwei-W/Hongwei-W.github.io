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
  slides,
  word,
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
                <a
                  href={github.url}
                  target="_blank"
                  title={github.title ? github.title : "GitHub"}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              )}
              {external && (
                <a
                  href={external.url}
                  target="_blank"
                  title={external.title ? external.title : "External Link"}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
              {video && (
                <a
                  href={video.url}
                  target="_blank"
                  title={video.title ? video.title : "Demo Video"}
                >
                  <i className="fa-solid fa-photo-film"></i>
                </a>
              )}
              {figma && (
                <a
                  href={figma.url}
                  target="_blank"
                  title={figma.title ? figma.title : "Figma"}
                >
                  <i className="fa-brands fa-figma"></i>
                </a>
              )}
              {word && (
                <a
                  href={word.url}
                  target="_blank"
                  title={word.title ? word.title : "Word"}
                >
                  <i className="fa-solid fa-file-word"></i>
                </a>
              )}
              {slides && (
                <a
                  href={slides.url}
                  target="_blank"
                  title={slides.title ? slides.title : "Slides"}
                >
                  <i className="fa-solid fa-file-powerpoint"></i>
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
