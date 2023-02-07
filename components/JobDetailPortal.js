import React from 'react'
import styles from '../styles/components/JobDetailPortal.module.scss';

const JobDetailPortal = ({ job, onClose }) => {
  const [currentJob] = job
  
  const {title, description, job_type, candidate_required_location, url} = currentJob;

  return (
    <div className={`modal ${styles['job-details']}`}>
      <div className={styles['job-details__header']}>
        <h2>{title}</h2>
        <div onClick={onClose} className={styles['close-btn']}>✖</div>
      </div>
      <p className={styles['job-details__subtitle']}>
        {job_type} / {candidate_required_location}
      </p>
      <div className={styles['job-description']} dangerouslySetInnerHTML={{__html: description}}></div>
      
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

 
  
}

export default JobDetailPortal