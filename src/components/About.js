import React from 'react';
import family_photo from '../media/tree-profile.jpg'

export default function About(props) {

    let { about } = props;
    let aboutParagraphs = about.map((str, i) => (<p key={i}>{str}</p>));

    return (
        <div className="row white box-shadow">
            <div className="side-content"></div>
            <div className="main-content">
                <div className="content-header">
                    <a className="anchor" name="about" href="google.com"> <p>placeholder content (goes to google for now)</p> </a>
                    <h2>About Me</h2>
                </div>
                <div className="content-body about-content">
                    <div className="about-description" >
                        {aboutParagraphs}
                    </div>
                    <img src={family_photo} alt="family" />
                </div>
            </div>
            <div className="side-content">
            </div>
        </div>
    );
}