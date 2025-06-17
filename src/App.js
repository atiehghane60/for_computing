import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import TeamGrid from "./components/TeamGrid";
import Services from "./components/Services";
import Accordion from "./components/Accordion";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <h2>Who are we?</h2>
        <hr />
        <About />
      </div>
      <div id="projects">
        <h2>Research & Projects</h2>
        <hr />
        <Projects />
      </div>
      <div id="tech">
        <h2>Technologies</h2>
        <hr />
        <Technologies />
      </div>
      <div id="services">
        <h2>Services</h2>
        <hr />
        <Services />
      </div>
      <div id="team">
        <h2>Meet our Team</h2>
        <hr />
        <TeamGrid />
      </div>
      <div id="publications">
        <h2>Publications & Resources</h2>
        <hr />
        <Accordion />
      </div>
      <div id="contact">
        <h2>Contact Us</h2>
        <hr />
        <ContactForm />
      </div>
      <Footer/>
    </>
  );
}

export default App;
