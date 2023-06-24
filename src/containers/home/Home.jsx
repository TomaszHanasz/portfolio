import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Button from "@mui/material/Button";
import "./home.style.css"

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="home__container">
        <h1>
          Hello! <br />
          I’m <span>Tomasz Hanasz</span>
        </h1>
        <p>
          I am freelance web developer who loves to craft attractive design
          experiences for the web.
        </p>
        <Button variant="contained" style={{width: 256, height: 64, backgroundColor: "#FD8585"}}>Email me</Button>
      </div>
    </div>
  );
};

export default Home;
