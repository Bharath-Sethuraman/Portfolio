import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Education from './Components/Education';
import Certifications from './Components/Cerifications';
import React, { useEffect } from 'react';
// import ReactGA from 'react-ga';

// const TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual Tracking ID
// ReactGA.initialize(TRACKING_ID);

function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
