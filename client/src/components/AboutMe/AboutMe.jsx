import { Grid } from "@material-ui/core";
import React from "react";

const AboutMe = () => {
  return (
    <Grid
      item
      container
      justify="center"
      alignItems="center"
      component="section"
      className="about-section"
      id="about-section"
    >
      <h1>This is the about me section </h1>
    </Grid>
  );
};

export default AboutMe;
