const Job = ({
  image,
  title,
  description,
  skillSet,
  company,
  interval,
  github,
  external,
  video,
  figma,
}) => {
  return (
    <div className="Job list-item section container-fluid">
      <div className="row">
        <div className="job col-8">
          <div className="row">
            <div className="col-1 job-link flexbox-container">
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

            <div className="col job-description flexbox-container">
              <div className="title t1 sub-list-item">{title}</div>
              <div className="sub-list-item">
                <span className="company">{company}</span>&nbsp;
                <span className="interval">{interval}</span>
              </div>
              <div className="description sub-list-item">{description}</div>
              {skillSet && (
                <div className="skill-set sub-list-item">
                  <span className="t1">Skill set</span>: {skillSet}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="image col-4 overflow-hidden text-center">
          {image ? (
            <img alt={image.alt} src={image.src} />
          ) : (
            <div>image not available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
