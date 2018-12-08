import React from 'react';

export default function Footer(props) {

  let { name, currentYear } = props;

  return (
    <div className="row">
      <div className="side-content"></div>
      <div className="main-content">
        <div className="content-header">
        </div>
        <div className="content-body">
          <p>{`Copyright ${name.first} ${name.last} ${currentYear}`}</p>
          <p>Created using React, gh-pages, and create-react-app</p>
          <a
            target="_blank"
            href="https://github.com/Deraj21/jaredmtanner-portfolio"
          >github link</a>
        </div>
      </div>
      <div className="side-content"></div>
    </div>
  );
}