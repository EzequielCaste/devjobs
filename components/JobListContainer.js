import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import useWindowSize from '../hooks/useWindowSize';
import JobDetailPortal from './JobDetailPortal';
import { JobListItem } from './JobListItem';
import { JobDetails } from './JobDetails';

export const JobListContainer = ({ jobs }) => {
  const [currentJob, setCurrentJob] = useState('');
  const [showModal, setShowModal] = useState(false);
  const {width} = useWindowSize()
 
  const isMobile = width < 500

  const handleClick = (id) => {
    setShowModal(true)
    setCurrentJob(jobs.filter((job) => job.id === id));
  };

  const jobListComponents = jobs?.map((job) => (
    <div key={job.id} onClick={() => handleClick(job.id)}>
      <JobListItem job={job} />
    </div>
  ));

  return (
    <div className="job-list-container">
      <ul>{jobListComponents}</ul>
      <section className="job-list-container__showcase">
        {
          currentJob && showModal && isMobile &&
          createPortal(
            <JobDetailPortal job={currentJob} onClose={() => setShowModal(false)} />,
            document.body
          )
        }
        {
          currentJob && !isMobile && <JobDetails job={currentJob} />
        }
      </section>
    </div>
  );
};
