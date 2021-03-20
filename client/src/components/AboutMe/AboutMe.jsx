import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    marginBottom: ".5em",
  },
  heading: {
    marginBottom: "1em",
  },
  about: {
    padding: "1em",
    maxWidth: "90ch",
  },
  p: {
    margin: "1em 0",
    lineHeight: 1.5,
  },
});

const AboutMe = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="center"
      component="section"
      className="about-section"
      id="about-section"
    >
      <Grid item>
        <Typography
          variant="h2"
          className={`contact-heading ${classes.heading}`}
        >
          About Me
        </Typography>
      </Grid>
      <Grid item className={classes.about}>
        <Typography
          variant={isSmallScreen ? "body1" : "h4"}
          className={classes.p}
        >
          I'm a full-stack software engineer currently based in the Detroit
          Metropolitian Area. I'm a detail-oriented developer driven by language
          and the mechanisms we use to communicate.
        </Typography>
        <Typography
          variant={isSmallScreen ? "body1" : "h4"}
          className={classes.p}
        >
          My background is in secondary English education, creative writing, and
          editing, meaning that I bring a unique, language-driven perspective to
          the way I approach web development.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
