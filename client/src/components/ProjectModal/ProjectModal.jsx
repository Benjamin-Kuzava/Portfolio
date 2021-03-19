import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";
import { Grid, IconButton, Link, Paper } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import ComputerIcon from "@material-ui/icons/Computer";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#d8dee9",
    outlineColor: "#b48ead",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "#121212",
    height: "fit-content",
    width: "60vh",
  },
  social: {
    padding: "0 .5em",
    transition: "all ease-in-out 150ms",
    "&:hover": {
      color: "#121212",
      fontSize: "80",
    },
  },
}));

export default function ProjectModal(props) {
  const classes = useStyles();
  const { open, setOpen, project } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
          <div className={classes.paper}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <h2 id="transition-modal-title">{project.title}</h2>
            <p id="transition-modal-description">
              &nbsp;&nbsp;&nbsp;&nbsp;{project.description}
            </p>
            {project.descriptionTwo && (
              <p id="transition-modal-descriptionTwo">
                &nbsp;&nbsp;&nbsp;&nbsp;{project.descriptionTwo}
              </p>
            )}
            <Paper className="modal-img-container">
              <img src={project.imageTwo} alt={project.title} />
            </Paper>
            {project.imageThree && (
              <Paper className="modal-img-container">
                <img src={project.imageThree} alt={project.title} />
              </Paper>
            )}
            <Grid container justify="space-around">
              <Link
                href={project.gitHub}
                color="secondary"
                className={classes.social}
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon style={{ fontSize: 40 }} />
              </Link>
              <Link
                href={project.liveSite}
                color="secondary"
                className={classes.social}
                target="_blank"
                rel="noopener"
              >
                <ComputerIcon style={{ fontSize: 40 }} />
              </Link>
            </Grid>
          </div>
        </Zoom>
      </Modal>
    </>
  );
}
