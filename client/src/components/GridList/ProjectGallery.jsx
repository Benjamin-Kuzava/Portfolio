import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { projects } from "./projectData";
import { Grid, Paper } from "@material-ui/core";
import ProjectModal from "../ProjectModal/ProjectModal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    minWidth: 300,
    width: "80%",
  },
  image: {
    position: "relative",
    height: 300,
    border: "5px solid #d8dee9",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 200,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.5,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  heading: {
    marginBottom: "2rem",
  },
}));

export default function ProjectGallery() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedProject, setselectedProject] = useState([]);

  const handleOpen = (project) => {
    setselectedProject(project);
    setOpen(true);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Typography
          variant="h2"
          className={`projects-heading ${classes.heading}`}
        >
          Recent Projects
        </Typography>
      </Grid>
      <Grid item component={Paper} elevation={3} className={classes.root}>
        {projects.map((project) => (
          <React.Fragment key={project.image}>
            <ButtonBase
              focusRipple
              key={project.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: "50%",
              }}
              onClick={() => handleOpen(project)}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {project.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </React.Fragment>
        ))}
        <ProjectModal open={open} setOpen={setOpen} project={selectedProject} />
      </Grid>
    </Grid>
  );
}
