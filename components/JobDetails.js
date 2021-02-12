import React from 'react';

export const JobDetails = ({job}) => {
 const {title, description} = job[0]
  
  return (
    <div className="JobDetails">
      <h2>
      {title}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: description}}></p>      
    </div>
  )
}
