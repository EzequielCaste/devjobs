import React from 'react';

export const JobListItem = ({job}) => {
  const {title, company_name, company_logo_url = 'https://via.placeholder.com/36', description, type} = job;
  return (
    <li>      
      <img src={company_logo_url} alt={`Logo for ${company_name} `} />
      <div>
        <span className="job-title">{title}</span>
        <span className="company-name">{company_name}</span>
      </div>
    </li>
  );
};
