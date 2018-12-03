import React from 'react';

export default function About(props) {

  let { about } = props;
  let aboutParagraphs = about.map((str, i) => ( <p key={i}>{str}</p> ));

  return (
    <div className="row white box-shadow">
      <div className="side-content"></div>
      <div className="main-content">
        <div className="content-header">
          <a className="anchor" name="about"></a>
          <h2>About Me</h2>
        </div>
        <div className="content-body">
          { aboutParagraphs }
        </div>
      </div>
      <div className="side-content"></div>
    </div>
  );
}