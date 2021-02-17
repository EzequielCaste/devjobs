import React from 'react';
import styles from '../styles/components/JobDetails.module.scss';

export const JobDetails = ({ job }) => {
  const {
    title,
    description,
    type,
    created_at,
    location,
    how_to_apply,
  } = job[0];

  return (
    <div className={styles.JobDetails}>
      <h2>{title}</h2>
      <p className={styles.subtitle}>
        {type} / {location}
      </p>
      <div className={styles.howToApply}>
        <h5>How to apply</h5>
        <p dangerouslySetInnerHTML={{ __html: how_to_apply }}></p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};
