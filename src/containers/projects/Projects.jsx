import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavBar from "../../components/navBar/NavBar";
import WeatherApp from "../../images/weatherapp.jpg";
import MoviesDom from "../../images/moviesdom.jpg";
import "./projects.style.css";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div className="projects__container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 240 }}
            image={WeatherApp}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather Application
            </Typography>
            <Typography variant="body2" color="text.secondary">
              App use Axios to fetch data from OpenWeather database.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://new-weather-app-tomek.netlify.app/">
              <Button size="small">Go</Button>
            </a>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 240 }}
            image={MoviesDom}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Movies Database
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Js dom creates movie tile and modal from object data.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://moviestomek.netlify.app/">
              <Button size="small">Go</Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
