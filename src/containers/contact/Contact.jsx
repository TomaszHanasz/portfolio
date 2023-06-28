import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "./contact.style.css";

const Contact = () => {
  const [sendedMessage, setSendedMessage] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSendedMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  return (
    <div>
      <NavBar />
      <div className="request-container" id="contact">
        <form
          action="https://formsubmit.co/tomaszhanasz@yahoo.pl"
          className="request-form"
          method="POST"
        >
          <h1 className="request-text" style={{ color: "#2c343f" }}>
            Contact Me
          </h1>
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
              input: {
                color: "#2c343f",
              },
            }}
            name="name"
            label="Name"
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.name}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
              input: {
                color: "#2c343f",
              },
            }}
            name="lastName"
            label="Last Name"
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.lastName}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
              input: {
                color: "#2c343f",
              },
            }}
            name="email"
            label="Email"
            type="email"
            color="primary"
            focused
            required
            onChange={onChangeHandler}
            value={sendedMessage.email}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
                input: {
                  color: "#2c343f",
                },
              },
            }}
            name="message"
            fullWidth
            label="Type your Message"
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.message}
          />
          <Button
            type="submit"
            sx={{
              width: 256,
              height: 64,
              backgroundColor: "#FD8585",
              color: "#2c343f",
              "&:hover": {
                backgroundColor: "2c343f",
                color: "#FD8585",
              },
            }}
            variant="contained"
          >
            Send
          </Button>
        </form>
      </div>
      <div className="contact__footer">
        <div className="contact__details">
          <LocalPhoneIcon sx={{ width: 35, height: 35 }} />
          <p>224-226-5809</p>
        </div>
        <div className="contact__details">
          <EmailIcon sx={{ width: 40, height: 40 }} />
          <p>tomaszhanasz@yahoo.pl</p>
        </div>
        <p>©2023 Tomasz Hanasz</p>
      </div>
    </div>
  );
};

export default Contact;
