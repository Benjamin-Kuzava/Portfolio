import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link, makeStyles, useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import "./Nav.css";
import resume from "../../assets/Benjamin-Kuzava-Resume-Jan-2021.pdf";

const useStyles = makeStyles(() => ({
  navItem: {
    color: "white",
  },
  resume: {
    color: "white",
    borderColor: "white",
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
    anchor.scrollIntoView({
      behavior: "smooth",
      block: id === "contact-section" ? "start" : "center",
    });
  }
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const fontStyle = isSmallScreen ? ".7em" : "";

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid
              component="nav"
              container
              justify={isSmallScreen ? "flex-start" : "space-between"}
              spacing={2}
            >
              <Grid item>
                <Button
                  component={Grid}
                  variant="text"
                  className={classes.navItem}
                  item
                  style={{ fontSize: fontStyle }}
                  onClick={(e) => handleSmoothClick(e, "back-to-top-anchor")}
                >
                  Home
                </Button>
                <Button
                  component={Grid}
                  variant="text"
                  className={classes.navItem}
                  item
                  style={{ fontSize: fontStyle }}
                  onClick={(e) => handleSmoothClick(e, "about-section")}
                >
                  About Me
                </Button>
                <Button
                  component={Grid}
                  variant="text"
                  className={classes.navItem}
                  item
                  style={{ fontSize: fontStyle }}
                  onClick={(e) => handleSmoothClick(e, "projects-section")}
                >
                  Projects
                </Button>
                <Button
                  component={Grid}
                  variant="text"
                  className={classes.navItem}
                  item
                  style={{ fontSize: fontStyle }}
                  onClick={(e) => handleSmoothClick(e, "contact-section")}
                >
                  Contact
                </Button>
              </Grid>
              <Button
                variant={isSmallScreen ? "text" : "outlined"}
                className={classes.resume}
                style={{ fontSize: fontStyle }}
                component={Link}
                href={resume}
                target="_blank"
                rel="noopener"
              >
                Resume
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
