const Educations = ({ educations }) => {
  return (
    <div className="Educations flexbox-container">
      <div className="flexbox-container section">
        {educations.map((education, index) => (
          <>
            <img alt={education.logo.alt} src={education.logo.src} />
            {education.infos.map((info, index) => (
              <div key={index}>{info}</div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Educations;
