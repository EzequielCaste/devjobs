import React, { useState } from 'react'
import { Button } from './Button'

export const JobSearchInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="JobSearchInput">
    <label htmlFor="job-search">Job Description</label>
      <input 
        type="text" 
        placeholder="Search by tags, title, expertise, companies"
        value={inputValue}  
        onChange={ (e) => setInputValue(e.target.value)}
        />
      <Button innerText="Search" />
    </div>
  )
}
