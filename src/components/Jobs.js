import Job from "./Job";

const Jobs = ({ jobs }) => {
  return (
    <div className="Jobs" id="WORK">
      {jobs.map((job, index) => (
        <Job
          key={index}
          image={job.image}
          title={job.title}
          description={job.description}
          company={job.company}
          interval={job.interval}
          skillSet={job.skillSet}
          github={job.github}
          external={job.external}
          video={job.video}
          figma={job.figma}
        />
      ))}
    </div>
  );
};

export default Jobs;
