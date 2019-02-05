import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

import data from './data';
let { name, links, title, city, state, jobs, about, schools, projects, skills, phoneNum, email, currentYear } = data;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Header name={name} links={links} title={title} city={city} state={state} email={email} phoneNum={phoneNum}/>
          <About about={about}/> {/* w */}
          <Projects projects={projects}/> {/* g */}
          <Skills skills={skills}/> {/* w */}
          <Contact email={email} phoneNum={phoneNum}/>
          <Footer currentYear={currentYear} name={name}/>
        </div>
      </div>
    );
  }
}

export default App;
