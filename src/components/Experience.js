import React from 'react';

export default function Experience(props) {

    let { jobs } = props;

    let jobCards = jobs.map(job => (
        <div className="card">
            <div className="card-header">
                <h4>{job.company} <span className="job-title">{job.title}</span></h4>
            </div>
            <div className="card-content">
                <p>{job.startDate} - {job.endDate}</p>
                <p>{job.description}</p>
            </div>
        </div>
    ));

    return (
        <div className="row">
            <div className="side-content"></div>
            <div className="main-content">
                <div className="content-header">
                    <a className="anchor" name="experience"></a>
                    <h2>Experience</h2>
                </div>

                <div className="content-body">
                    {jobCards}
                </div>
            </div>
            <div className="side-content"></div>
        </div>
    );
}