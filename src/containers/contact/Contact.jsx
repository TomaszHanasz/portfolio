import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Button from "@mui/material/Button";
import "./contact.style.css";

const Contact = () => {
  const [message, setMessage] = useState({});

  const onChangeHandler = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <NavBar />
      <div className="contact">
        <h1 style={{ textAlign: "center", marginBottom: 50 }}>Contact me</h1>
        <form className="contact__form" onSubmit={onSubmitHandler}>
          <div className="contact__name">
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" onChange={onChangeHandler} />
          </div>
          <div className="contact__email">
            <label>Email:</label>
            <input name="email" type="email" onChange={onChangeHandler} />
          </div>
          <div className="contact__large-input">
            <label>Message:</label>
            <textarea
              name="message"
              type="text"
              rows="10"
              onChange={onChangeHandler}
            />
          </div>
          <Button
            variant="contained"
            style={{
              width: 210,
              height: 50,
              backgroundColor: "#FD8585",
              marginTop: 100,
              color: "#2c343f",
            }}
            className="contact__btn"
            type="submit"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
