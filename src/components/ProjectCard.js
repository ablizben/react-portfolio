import React from "react";




function ProjectCard(props) {
    return (
        <div className="card">

            <div id="projectName">
            {props.name}
            </div>
            <div id="codeNames">
            {props.code}
            </div>
            <div id="projectImage">
               <img alt={props.name} src={props.image} />
            </div>
            <div id="projectLinks">
                <a href={props.deployedApp}>App</a>&nbsp;&nbsp; 
                <a href={props.deployedCode}>Code</a>
            </div>

        </div>
        
    )
}


export default ProjectCard;




