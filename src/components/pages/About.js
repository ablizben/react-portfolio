import React from "react";
import './pages.css';
import ProfilePic from "./picture.jpeg";
import htmlPic from "./images/html5.png";
import cssPic from "./images/css3.jpeg";
import reactPic from "./images/react.jpeg";
import mongodbPic from "./images/mongodb.jpeg";
import nodePic from "./images/node.png";
import javascriptPic from "./images/javascript.png";


const About = () => (
  <div>
    <h3>About Me</h3>
    <hr />
      <div className="row">
        <div className="col-md-6 aboutSections">
          <img class="profilePic profilePic1" src={ProfilePic} alt= "profile picture" />
        </div>
          <div className="col-md-6 aboutSections">
            <h4 className="bio bio1">
            Hi, there! My name is Abby Benjamin. I'm a web developer that recently graduated from a full stack web 
            development boot camp through Trilogy and Johns Hopkins University. For 
            now, my focus is in front end development with JavaScript. I'm excited to 
            continue to learn as I dive deeper into coding.
            </h4>
          </div>
        </div>
        <h3 className="skills">My Skills</h3>
        <hr />
        <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <img className="iconImage" src={htmlPic} alt="html" />
            <img className="iconImage" src={javascriptPic} alt="javascript" />
            <img className="iconImage" src={cssPic} alt="css" />
          </div>
          <div className="col-sm-6">
            <img className="iconImage" src={nodePic} alt="node" />
            <img className="iconImage" src={reactPic} alt="react" />
            <img className="iconImage" src={mongodbPic} alt="mongodb" />
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default About;
