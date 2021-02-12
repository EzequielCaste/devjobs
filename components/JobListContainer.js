import React, {useState} from 'react'
import { JobDetails } from './JobDetails';
import { JobListItem } from './JobListItem';

export const JobListContainer = ({jobs}) => {

  const [currentJob, setCurrentJob] = useState('');

  const handleClick = (id) => {
    setCurrentJob(jobs.filter( job => job.id === id));       
  }
  const jobListComponents = jobs.map( job => (<div key={job.id} onClick={() => handleClick(job.id)}>
    <JobListItem job={job} /></div>));    

  return (
    <div className="JobListContainer">
      <ul>
        {jobListComponents}
      </ul>
      <section className="showcase">
        {
          // show job details here 
        }
        {
          currentJob && <JobDetails job={currentJob} />
        }
      </section>
    </div>
  )
}
