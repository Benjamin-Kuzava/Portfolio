import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Nav.css";

const useStyles = makeStyles(() => ({
  navItem: {
    color: "white",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    // color: trigger ? "secondary" : "primary",
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const handleSmoothClick = (event, id) => {
  const anchor = (event.target.ownerDocument || document).querySelector(
    `#${id}`
  );

  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid container justify="flex-start" spacing={2}>
              <Button
                component={Grid}
                variant="text"
                className={classes.navItem}
                item
                onClick={(e) => handleSmoothClick(e, "about-section")}
              >
                About Me
              </Button>
              <Button
                component={Grid}
                variant="text"
                className={classes.navItem}
                item
                onClick={(e) => handleSmoothClick(e, "projects-section")}
              >
                Projects
              </Button>
              <Button
                component={Grid}
                variant="text"
                className={classes.navItem}
                item
                onClick={(e) => handleSmoothClick(e, "contact-section")}
              >
                Contact
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
