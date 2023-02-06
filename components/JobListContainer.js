import React, {useState} from 'react';
import {JobDetails} from './JobDetails';
import {JobListItem} from './JobListItem';

export const JobListContainer = ({jobs}) => {
  const jobList = jobs.jobs;

  const [currentJob, setCurrentJob] = useState('');

  const handleClick = (id) => {
    setCurrentJob(jobList.filter((job) => job.id === id));
  };
  const jobListComponents = jobList.map((job) => (
    <div key={job.id} onClick={() => handleClick(job.id)}>
      <JobListItem job={job} />
    </div>
  ));

  return (
    <div className="job-list-container">
      <ul>{jobListComponents}</ul>
      <section className="job-list-container__showcase">
        {currentJob && <JobDetails job={currentJob} />}
      </section>
    </div>
  );
};
