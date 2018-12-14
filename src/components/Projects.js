import React from 'react';
import hangmanImg from '../media/hangman-phone-game.png';
import dndImg from "../media/dnd-char-gen.png";
import trelloImg from "../media/trello-board-view.png";

export default function Projects(props) {
  
  let { projects } = props;
  let projectCards = projects.map((project, i) => {
    console.log(project.image);
    let imageText = project.image;
    return (
    <div className="project-card" key={i} >
      <div className="project-image-box">
      {
        project.image === "hangman"
        ?
        <img src={hangmanImg} />
        :
        project.image === "trello"
        ?
        <img src={trelloImg} />
        :
        project.image === "dnd"
        ?
        <img src={dndImg} />
        :
        <img src="http://placehold.it/200x200" />
      }
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        { project.description.map( (str, i) => <p key={i}>{str}</p> ) }
        { project.links.map( (link, i) => <a key={i} target="_blank" href={link.url}> {link.text} </a> ) }
      </div>
    </div>
    );
     } );

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