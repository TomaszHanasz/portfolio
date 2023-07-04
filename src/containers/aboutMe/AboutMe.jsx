import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./aboutMe.style.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <NavBar />
      <div className="about-me__container">
        <p>
          My name is <span>Tomasz</span> and I have over 2 years of experience
          as a <span>front-end developer</span>. I've worked on various
          projects, ranging from building responsive web applications to
          optimizing website performance. I'm passionate about creating
          user-friendly and visually appealing interfaces, and I'm eager to
          discuss how my skills and experience align with the front-end
          developer role.
        </p>
        <br />
        <p>
          I'm proficient in <span>HTML5</span>, <span>CSS3</span>, and{" "}
          <span>JavaScript</span>, and I have hands-on experience with popular
          frameworks such as <span>React</span>. I've also worked with version
          control tools like <span>Git</span>. In my previous roles, I've been
          responsible for developing responsive web pages, implementing user
          interface designs, optimizing website performance, and collaborating
          with cross-functional teams to deliver successful projects.
        </p>
        <br />
        <p>
          I believe that effective <span>teamwork</span> and{" "}
          <span>communication</span> are crucial in any development project.
          I've worked in cross-functional teams, collaborating with designers,
          backend developers, and stakeholders to ensure smooth project
          delivery. I actively participate in team meetings, provide regular
          updates on my <span>progress</span>, and seek feedback from my team
          members to continuously improve my <span>work</span>.
        </p>
      </div>
   
    </div>
  );
};

export default AboutMe;
