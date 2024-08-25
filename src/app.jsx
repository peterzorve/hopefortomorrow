// https://www.youtube.com/watch?v=WbV3zRgpw_E&t=6960s
import React, { useState }  from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter  as Router, Routes, Route } from 'react-router-dom';

// Screen
import Navbar from './components/Navbar/Navbar'
import HomeScreen from './components/home/HomeScreen';
import PublicationScreen from './components/publication/PublicationScreen';
import ContactScreen from './components/contact/ContactScreen';
import ProjectScreen from './components/projects/ProjectScreen';
import AboutMeScreen from './components/AboutMe/AboutMeScreen';
import ResumeScreen from './components/Resume/ResumeScreen';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <Router basename="/hopefortomorrow">
      <Navbar/>
        <div className="container">
          <Routes>
              <Route path="/" element={<HomeScreen/>} />
              <Route path="/contact" element={<ContactScreen/>} />
              <Route path="/projects" element={<ProjectScreen/>} />
              <Route path="/publications" element={<PublicationScreen/>} />
              <Route path="/aboutme" element={<AboutMeScreen/>} />
              <Route path="/resume" element={<ResumeScreen/>} />
          </Routes>
          <Footer/>
        </div>
    </Router>

  )
}

export default App