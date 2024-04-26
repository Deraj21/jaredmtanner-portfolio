import React from 'react';

export default function Footer(props) {

    let { name } = props;
    const currentYear = new Date(Date.now()).getFullYear()

    return (
        <div className="row">
            <div className="side-content"></div>
            <div className="main-content">
                <div className="content-header">
                </div>
                <div className="content-body">
                    {/* <p>{`Copyright ${name.first} ${name.last} ${currentYear}`}</p> */}
                    <p>
                        <span>Created using React, hosted with github pages</span>
                        {" | "}
                        <a target="_blank" href="https://github.com/Deraj21/jaredmtanner-portfolio/tree/master">view the code on github</a>
                    </p>
                </div>
            </div>
            <div className="side-content"></div>
        </div>
    );
}