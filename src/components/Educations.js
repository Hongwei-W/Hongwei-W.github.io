const Educations = ({ educations }) => {
  return (
    <div className="Educations flexbox-container" id="EDUCATION">
      {educations.map((education, index) => (
        <div key={index} className="education section flexbox-container">
          <img alt={education.logo.alt} src={education.logo.src} />
          {education.infos.map((info, index) => (
            <div key={index}>{info}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Educations;
