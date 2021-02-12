import React from 'react'

export const JobListItem = ({job}) => {
  const {title, company, company_logo,description, type} = job;
  return (
    <li>
      <img src={company_logo} alt=""/>
      <div>
        <span className="job-title">{title}</span>
        <span className="company-name">{company}</span>
      </div>
      
    </li>
  )
}
