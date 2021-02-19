import React, { useState } from 'react';
import styles from '../styles/components/JobSearchInput.module.scss';

export const JobSearchInput = ({ handleClick }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles['job-search-input']}>
      <label htmlFor="job-search">Job Description</label>
      <input
        type="text"
        placeholder="Search by tags, title, expertise, companies"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        disabled={!inputValue}
        onClick={() => handleClick(inputValue)}
        className={styles['job-search-input__search-btn']}
      >
        Search
      </button>
    </div>
  );
};
