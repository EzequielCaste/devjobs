import React from 'react';
import styles from '../styles/components/JobDetails.module.scss';

export const JobDetails = ({job}) => {
  const {title, description, job_type, candidate_required_location, url} =
    job[0];

  return (
    <div className={styles['job-details']}>
      <h2>{title}</h2>
      <p className={styles['job-details__subtitle']}>
        {job_type} / {candidate_required_location}
      </p>
      <div dangerouslySetInnerHTML={{__html: description}}></div>
      <div
        className={
          (styles['job-details__how-to-apply'], styles['information-box'])
        }
      >
        <h5 className={styles['box-title']}>How to apply</h5>
        <a href={url}>{url}</a>
      </div>
    </div>
  );
};
