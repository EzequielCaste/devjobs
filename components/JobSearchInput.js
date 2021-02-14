import React, { useState } from 'react';

export const JobSearchInput = ({ handleClick }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="JobSearchInput">
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
        className="SearchBtn"
      >
        Search
      </button>
    </div>
  );
};
