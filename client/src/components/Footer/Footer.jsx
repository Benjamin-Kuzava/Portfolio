import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  social: {
    padding: "0 .5em",
    transition: "all ease-in-out 150ms",
    "&:hover": {
      color: "#d8dee9",
      fontSize: "80",
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      component="footer"
      className={classes.footer}
    >
      <Grid item xs={12} sm={2}>
        <Typography>Benjamin J. Kuzava &copy; 2021</Typography>
      </Grid>
      <Grid item>
        <Link
          href="https://github.com/Benjamin-Kuzava"
          color="secondary"
          className={classes.social}
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon style={{ fontSize: 40 }} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/benjaminkuzava/"
          color="secondary"
          className={classes.social}
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon style={{ fontSize: 40 }} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
