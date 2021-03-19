import { Grid } from "@material-ui/core";
import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import BackToTop from "../BackToTop/BackToTop";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <Grid container direction="row">
      <Nav />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </Grid>
  );
};

export default Home;
