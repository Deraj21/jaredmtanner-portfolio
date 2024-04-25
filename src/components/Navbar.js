import React from 'react';
import data from '../data';

export default function Navbar() {

    let { navbar } = data;

    const navLinks = navbar.links.map(link => (
        <a key={link.ref} href={link.ref}>{link.text}</a>
    ));

    return (
        <div className="navbar">
            {navLinks}
        </div>
    );
}

