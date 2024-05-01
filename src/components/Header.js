import React from 'react';
import github from '../media/GitHub_Logo_White.png'
import linkedin from '../media/Logo-White-48px-TM.png'

export default function Header(props) {

    let { name, links, tagline, phoneNum, email } = props;

    return (
        <div className="jumbotron">
            <div className="jumbotron-text">
                <h1>{name.first} {name.last}</h1>
                <p>{tagline}</p>
            </div>
            {/* contact info */}
            <div className="contact-info">
                <span>{email}</span>
                <span>{phoneNum}</span>
            </div>
            <div className="jumbotron-social">
                <a className="social" href={links.github} target="_blank">
                    <img src={github} className="logo github-logo" />
                </a>
                <a className="social" href={links.linkedin} target="_blank">
                    <img src={linkedin} className="logo linkedin-logo" />
                </a>
            </div>
            {/* <div id="down-arrow">
                <span><a href="#about"><i className="fa fa-chevron-down" aria-hidden="true"></i></a></span>
            </div> */}
        </div>
    );
}