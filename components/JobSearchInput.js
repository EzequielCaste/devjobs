import React, { useState } from 'react';
import styles from '../styles/components/JobSearchInput.module.scss';

export const JobSearchInput = ({ handleClick, handleChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState('github');

  return (
    <div className={styles['job-search-input']}>
      <div>
        <label htmlFor="job-search">Job Description</label>
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

      {/* <div className={styles['job-search-input__api-selector']}>
        <div>
          <label htmlFor="github">GitHub Jobs</label>
          <input
            checked={checked === 'github'}
            type="radio"
            id="github"
            name="apiSite"
            value="GitHub Jobs"
            onChange={() => setChecked('github')}
          />
        </div>

        <div>
          <label htmlFor="remoteOk">Remote OK Jobs</label>
          <input
            checked={checked === 'remoteOk'}
            type="radio"
            id="remoteOk"
            name="apiSite"
            value="Remote OK Jobs"
            onChange={() => setChecked('remoteOk')}
          />
        </div>
      </div> */}
    </div>
  );
};
