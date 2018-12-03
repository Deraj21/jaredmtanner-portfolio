import React from 'react';

export default function Skills(props) {

  let { skills } = props;
  let skillBoxes = skills.map((skill, i) => (
    <li className="li-skills" key={i}>{skill}</li>
  ));

  return (
    <div className="row white box-shadow">
      <div className="side-content"></div>
      <div className="main-content">
        <div className="content-header">
          <a className="anchor" name="skills"></a>
          <h2>Skills</h2>
        </div>
        <div className="content-body">
          <ul className="ul-skills">
            { skillBoxes }
          </ul>
        </div>
      </div>
      <div className="side-content"></div>
    </div>
  );
}