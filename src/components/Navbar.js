import React from 'react';
import data from '../data';

const links = [
    { text: "About", ref: "#about" },
    { text: "Experience", ref: "#experience" },
    { text: "Projects", ref: "#projects" },
    { text: "Skills", ref: "#skills" },
    { text: "Contact", ref: "#contact" }
]

export default function Navbar() {

    const navLinks = links.map(link => (
        <a className='navlink' key={link.ref} href={link.ref}>{link.text}</a>
    ));

    return (
        <div className="Navbar">
            {navLinks}
        </div>
    );
}

