import React from 'react';

export default function Projects(props) {

  let { projects } = props;
  let projectCards = projects.map((project, i) => (
    <div className="project-card" key={i} >
      <div className="project-image">
        <img src={project.image}/>
      </div>
      <div className="project-content">
        <h4>{project.name}</h4>
        { project.description.map( (str, i) => <p key={i}>{str}</p> ) }
        { project.links.map( (link, i) => <a key={i} target="_blank" href={link.url}> {link.text} </a> ) }
      </div>
    </div>
  ) );

  return (
    <div className="row">
      <div className="side-content-sm"></div>
      <div className="main-content-lg">
        <div className="content-header">
          <a className="anchor" name="projects"></a>
          <h2>Projects</h2>
        </div>
        <div className="content-body">
          { projectCards }

        </div>
      </div>
      <div className="side-content-sm"></div>
    </div>
  );
}