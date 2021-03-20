import {
  Collapse,
  Grid,
  Grow,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    marginBottom: ".5em",
  },
});

const Hero = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    setTimeout(() => {
      setOpen((prev) => !prev);
    }, 500);
    return () => {
      setOpen((prev) => !prev);
    };
  }, []);

  return (
    <Grid
      item
      container
      justify="center"
      alignItems="center"
      component="section"
      className="hero-section"
      id="hero-section"
    >
      <Collapse
        in={open}
        style={{ transformOrigin: "0 0 0" }}
        {...(open ? { timeout: 300 } : {})}
      >
        <Typography
          variant={isSmallScreen ? "h3" : "h1"}
          className={classes.title}
        >
          Hello, my name is{" "}
          <Grow in={open} {...(open ? { timeout: 2000 } : {})}>
            <span className="outline">Benjamin</span>
          </Grow>{" "}
          Kuzava.
        </Typography>
        <Grow
          in={open}
          {...(open ? { timeout: 1000 } : {})}
          style={{ transitionDelay: open ? "500ms" : "0ms" }}
        >
          <Typography variant={isSmallScreen ? "h5" : "h3"}>
            I'm a web developer.
          </Typography>
        </Grow>
      </Collapse>
    </Grid>
  );
};

export default Hero;
