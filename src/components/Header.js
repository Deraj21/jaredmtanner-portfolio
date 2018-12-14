import React from 'react';

export default function Header(props) {

  let { name, links, title, city, state } = props;

  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <h1>{name.first} {name.last}</h1>
        <p>{title} in {city}, {state}.</p>
      </div>
      <div className="jumbotron-social">
        <ul className="ul-social">
          <li className="li-social-links">
            <a className="social" href={links.github} target="_blank">
              <div className="logo github-logo"></div>
            </a>
          </li>
          <li className="li-social-links">
            <a className="social" href={links.linkedin} target="_blank">
            <div className="logo linkedin-logo"></div>
            </a>
          </li>
        </ul>
      </div>
      <div id="down-arrow">
        <span><a href="#about"><i className="fa fa-chevron-down" aria-hidden="true"></i></a></span>
      </div>
    </div>
  );
}