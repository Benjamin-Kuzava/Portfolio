import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import BackToTop from "../BackToTop/BackToTop";
import Contact from "../Contact/Contact";
import Nav from "../Nav/Nav";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Nav />
      <AboutMe />
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  );
};

export default Home;
