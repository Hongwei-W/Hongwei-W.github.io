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
  word,
  slides,
}) => {
  return (
    <div className="Job list-item section flexbox-container">
      <div className="job-link flexbox-container">
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
      <div className="job">
        <div className=" job-description flexbox-container">
          <div className="job-header flexbox-container sub-list-item">
            <div className="text">
              <div className="t1">{title}</div>
              <div className="">
                <span className="company">{company}</span>&nbsp;
                <span className="interval">{interval}</span>
              </div>
            </div>
            <div className="image flexbox-container">
              {image ? (
                <img alt={image.alt} src={image.src} />
              ) : (
                <div>image not available</div>
              )}
            </div>
          </div>
          <div className="description sub-list-item">{description}</div>
          {skillSet && (
            <div className="skill-set sub-list-item">
              <span className="t2">Skill set</span>: {skillSet}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
