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
import DeliveryForm from "../../images/deliveryform.jpg";
import Todo from "../../images/todo.jpg";
import "./projects.style.css";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div className="projects__container">
        <a
          href="https://new-weather-app-tomek.netlify.app/"
          className="projects__card"
        >
          <Card sx={{ maxWidth: 345, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={WeatherApp}
              title="weather app"
            />
            <CardContent sx={{ minHeight: 120 }}>
              <Typography gutterBottom variant="h5" component="div">
                Weather Application
              </Typography>
              <Typography variant="body2" color="text.secondary">
                App use Axios to fetch data from OpenWeather database.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a href="https://moviestomek.netlify.app/" className="projects__card">
          <Card sx={{ maxWidth: 345, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={MoviesDom}
              title="movies dom"
            />
            <CardContent sx={{ minHeight: 120 }}>
              <Typography gutterBottom variant="h5" component="div">
                Movies Database
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Js dom creates movie tile and modal from object data.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://mui-todo-tomek.netlify.app/"
          className="projects__card"
        >
          <Card sx={{ maxWidth: 345, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240, minHeight: 240 }}
              image={Todo}
              title="todo"
            />
            <CardContent sx={{ minHeight: 120 }}>
              <Typography gutterBottom variant="h5" component="div">
                Todo list
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Simple todo list with local storage.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://deliveryformtomek.netlify.app/"
          className="projects__card"
        >
          <Card sx={{ maxWidth: 345, maxHeight: 360 }}>
            <CardMedia sx={{ height: 240 }} image={DeliveryForm} title="form" />
            <CardContent sx={{ minHeight: 120 }}>
              <Typography gutterBottom variant="h5" component="div">
                Delivery Form
              </Typography>
              <Typography variant="body2" color="text.secondary">
                App stores user input in an object. Fancy signature included.
              </Typography>
            </CardContent>
          </Card>
        </a>
      </div>
    </div>
  );
};

export default Projects;
