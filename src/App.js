import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Section from './components/Section'
import './App.css';

import data from './data';
let { name, links, tagline, jobs, schools, skills, phoneNum, email } = data;

class App extends Component {
    render() {

        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Header name={name} links={links} tagline={tagline} email={email} phoneNum={phoneNum} />

                    <div className='sections' >
                        <Section filePath="sections/about-me.md" anchor="about" />
                        <Section filePath="sections/experience.md" anchor="experience" />
                        <Section filePath="sections/projects.md" anchor="projects" />
                    </div>

                    <Skills skills={skills} />
                    <Contact email={email} phoneNum={phoneNum} />
                    <Footer name={name} />
                </div>
            </div>
        )
    }
}

export default App;
