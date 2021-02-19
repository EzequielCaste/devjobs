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
    <div className={styles['job-details']}>
      <h2>{title}</h2>
      <p className={styles['job-details__subtitle']}>
        {type} / {location}
      </p>
      <div
        className={
          (styles['job-details__how-to-apply'], styles['information-box'])
        }
      >
        <h5 className={styles['box-title']}>How to apply</h5>
        <p dangerouslySetInnerHTML={{ __html: how_to_apply }}></p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};
