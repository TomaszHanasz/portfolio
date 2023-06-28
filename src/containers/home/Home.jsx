import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import me from "../../images/image-61.png";
import { Link } from "react-router-dom";
import "./home.style.css";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="home__page">
        <div className="home__container">
          <div className="home__welcome">
            <h1>
              Hello! <br />
              I’m <span>Tomasz Hanasz</span>
            </h1>
            <p>
              I am web developer who loves to craft attractive design
              experiences for the web.
            </p>
            <div className="home__buttons">
              <Link to={"/contact"}>
                <Button
                  variant="contained"
                  style={{
                    width: 256,
                    height: 64,
                    backgroundColor: "#FD8585",
                    color: "#2c343f",
                  }}
                >
                  Contact
                </Button>
              </Link>
              <Link to={"/projects"}>
                <Button
                  variant="contained"
                  style={{
                    width: 256,
                    height: 64,
                    backgroundColor: "#FD8585",
                    color: "#2c343f",
                  }}
                >
                  My Projects
                </Button>
              </Link>
            </div>
            <div className="home__icons">
              <a href="https://github.com/TomaszHanasz/" className="home__link">
                <GitHubIcon sx={{ width: 50, height: 50 }} />
              </a>
              <a
                href="https://www.linkedin.com/in/tomasz-hanasz/"
                className="home__link"
              >
                <LinkedInIcon sx={{ width: 50, height: 50 }} />
              </a>
            </div>
            <div className="home__proficiency">
              <HtmlIcon sx={{ width: 50, height: 50 }} />
              <CssIcon sx={{ width: 50, height: 50 }} />
              <JavascriptIcon sx={{ width: 50, height: 50 }} />
            </div>
          </div>
        </div>
        <div className="home__right">
          <div className="photo__bgtwo">
            <div className="photo__bg">
              <img src={me} className="home__photo" alt="author" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
