import { Grid } from "@material-ui/core";
import React from "react";
import ProjectGallery from "../GridList/ProjectGallery";

const Projects = () => {
  return (
    <Grid
      item
      container
      justify="center"
      alignItems="center"
      component="section"
      className="projects-section"
      id="projects-section"
    >
      <ProjectGallery />
    </Grid>
  );
};

export default Projects;
