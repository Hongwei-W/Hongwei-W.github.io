import Job from "./Job";

const Jobs = ({ jobs }) => {
  return (
    <div className="Jobs">
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
          word={jobs.word}
          slides={jobs.slides}
          medal={job.medal}
          comment={job.comment}
        />
      ))}
    </div>
  );
};

export default Jobs;
