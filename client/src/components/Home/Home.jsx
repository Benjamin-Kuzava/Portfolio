import { Grid } from "@material-ui/core";
import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import BackToTop from "../BackToTop/BackToTop";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";

const Home = () => {
  return (
    <Grid container direction="row">
      <Nav />
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </Grid>
  );
};

export default Home;
