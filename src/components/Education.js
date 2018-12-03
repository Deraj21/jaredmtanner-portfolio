import React from 'react';

export default function Education(props) {

  let { schools } = props;
  
  // create school cards dynamically
  let schoolCards = schools.map(school => (
    <div className="card">
      <div className="card-header">
        <h4>{school.name} <span className="job-title"><a href={school.link} target="_blank" >{school.courseType}</a></span></h4>
      </div>
      <div className="card-content">
        <p>{school.startDate} - {school.endDate}</p>
        <p>{school.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="row white box-shadow">
      <div className="side-content"></div>
      <div className="main-content">
        <div className="content-header">
          <a className="anchor" name="education"></a>
          <h2>Education</h2>
        </div>
        <div className="content-body">

          { schoolCards }

        </div>
      </div>
      <div className="side-content"></div>
    </div>
  );
}