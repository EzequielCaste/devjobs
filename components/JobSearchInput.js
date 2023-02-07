import React, { useState } from 'react';
import styles from '../styles/components/JobSearchInput.module.scss';

export const JobSearchInput = ({ handleClick, handleChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState('github');

  return (
    <div className={styles['job-search-input']}>
      <div className={styles['job-search-input-container']}>
        <label htmlFor="job-search">Search</label>
        <input
          type="text"
          placeholder="Search by tags, title, expertise, companies"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          disabled={!inputValue}
          onClick={() => handleClick(inputValue, checked)}
          className={styles['job-search-input__search-btn']}
        >
          Search
        </button>
      </div>
    </div>
  );
};
