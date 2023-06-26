import "./App.css";
import Home from "./containers/home/Home";
import Projects from "./containers/projects/Projects";
import AboutMe from "./containers/aboutMe/AboutMe";
import Contact from "./containers/contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
