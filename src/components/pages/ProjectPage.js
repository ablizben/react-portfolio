import React, { Component } from "react";
import './pages.css';
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import project from "../project.json";




class ProjectPage extends Component {
  state = {
    project
};

render() {
  return (
  <Wrapper>
    <h3>Projects</h3>
    <hr />
    {this.state.project.map(project => (
    <div className=".card-deck">
      <ProjectCard
        id={project.id}
        name={project.name}
        code={project.code}
        image={project.image}
        appLink={project.deployedApp}
        codeLink={project.deployedCode}
        />
    </div>
    ))}
  </Wrapper>
  );
 }
}
 

         
export default ProjectPage;
