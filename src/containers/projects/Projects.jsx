import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NavBar from "../../components/navBar/NavBar";
import WeatherApp from "../../images/weatherapp.jpg";
import MoviesDom from "../../images/moviesdom.jpg";
import DeliveryForm from "../../images/deliveryform.jpg";
import Todo from "../../images/todo.jpg";
import CarDealer from "../../images/cardealer.jpg";
import Daycare from "../../images/daycare.png";
import Accounting from "../../images/accounting.jpg";
import MoviesData from "../../images/moviesdata.png";
import "./projects.style.css";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div className="projects__container">
        <a
          href="https://movies-database-tomek.netlify.app/"
          className="projects__card"
        >
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={MoviesData}
              title="movies database"
            />
            <CardContent sx={{ minHeight: 150, height: 150 }}>
              <h4>Movies Database</h4>
              <Typography variant="body2" color="text.secondary">
                App with search function from OpenImdb database.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://new-weather-app-tomek.netlify.app/"
          className="projects__card"
        >
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={WeatherApp}
              title="weather app"
            />
            <CardContent sx={{ minHeight: 150, height: 150 }}>
              <h4>Weather Application</h4>
              <Typography variant="body2" color="text.secondary">
                App use Axios to fetch data from OpenWeather database.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://www.figma.com/proto/KkXLIuQzlssyZovkuGJLTn/Untitled?page-id=0%3A1&type=design&node-id=1-2&viewport=715%2C260%2C0.18&scaling=min-zoom&mode=design"
          className="projects__card"
        >
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={Accounting}
              title="car dealership"
            />
            <CardContent sx={{ minHeight: 150, height: 150 }}>
              <h4>Taxes & Accounting</h4>
              <Typography variant="body2" color="text.secondary">
                Figma project of accounting office website.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a href="https://moviestomek.netlify.app/" className="projects__card">
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={MoviesDom}
              title="movies dom"
            />
            <CardContent sx={{ minHeight: 150, height: 150 }}>
              <h4>Movies Database</h4>
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
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240, minHeight: 240 }}
              image={Todo}
              title="todo"
            />
            <CardContent sx={{ minHeight: 150, height: 150 }}>
              <h4>Todo list</h4>
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
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia sx={{ height: 240 }} image={DeliveryForm} title="form" />
            <CardContent sx={{ minHeight: 150, height: 150 }}>
              <h4>Delivery Form</h4>
              <Typography variant="body2" color="text.secondary">
                App stores user input in an object. Fancy signature included.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a href="/projects" className="projects__card">
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia sx={{ height: 240 }} image={Daycare} title="daycare" />
            <CardContent sx={{ minHeight: 150, height: 150 }}>
              <h4>Helen Lucy Daycare</h4>
              <Typography variant="body2" color="text.secondary">
                Website for a daycare located in Chicago.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://www.figma.com/proto/TL4ZW14DDKjvK8ozSb7A4s/DEALERSHIP?embed_host=share&kind=&node-id=5-20557&page-id=0%3A1&scaling=scale-down&starting-point-node-id=5%3A20557&type=design&viewport=543%2C361%2C0.33"
          className="projects__card"
        >
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={CarDealer}
              title="car dealership"
            />
            <CardContent sx={{ minHeight: 150, height: 150 }}>
              <h4>Car Dealership</h4>
              <Typography variant="body2" color="text.secondary">
                Figma project of car dealership mobile website.
              </Typography>
            </CardContent>
          </Card>
        </a>
      </div>
    </div>
  );
};

export default Projects;
