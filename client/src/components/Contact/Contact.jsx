import {
  Button,
  TextField,
  Grid,
  makeStyles,
  withStyles,
  Typography,
  Popover,
} from "@material-ui/core";
import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

const CustomTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "#d8dee9",
      borderColor: "#d8dee9",
    },
    "& .MuiInput-underline:before": {
      borderColor: "#d8dee9",
    },
    "& .MuiInput-underline:hover:before": {
      borderColor: "#d8dee9",
    },
    "& .MuiInputBase-input": {
      color: "#d8dee9",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  typography: {
    padding: theme.spacing(2),
  },
  contactField: {
    margin: "1.5rem 0",
  },
  heading: {
    marginBottom: ".25rem",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_phzkear",
        "template_k3fn8g9",
        e.target,
        "user_e3RfGC6TRo0HouXTv5Ny4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setAnchorEl(e.currentTarget);
    sendEmail(e);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="center"
      component="form"
      className={`contact-section ${classes.form}`}
      id="contact-section"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <Grid item>
        <Typography
          variant="h2"
          className={`contact-heading ${classes.heading}`}
        >
          Contact Me!
        </Typography>
      </Grid>
      <Grid item>
        <CustomTextField
          id="name"
          label="Your Name"
          name="name"
          value={name}
          onChange={handleChange}
          color="secondary"
          className={classes.contactField}
        />
      </Grid>
      <Grid item>
        <CustomTextField
          id="email"
          label="Your Email"
          name="email"
          value={email}
          onChange={handleChange}
          color="secondary"
          className={classes.contactField}
        />
      </Grid>
      <Grid item>
        <CustomTextField
          id="message"
          label="Your Message"
          name="message"
          value={message}
          onChange={handleChange}
          color="secondary"
          multiline
          className={classes.contactField}
        />
      </Grid>
      <Grid item>
        <Button
          type="submit"
          variant="contained"
          className={classes.contactField}
        >
          Submit
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.typography}>
            Thanks! Can't wait to get in touch.
          </Typography>
        </Popover>
      </Grid>
      {/* <Footer /> */}
    </Grid>
  );
};

export default Contact;
