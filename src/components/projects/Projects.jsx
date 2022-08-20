import React from "react";
import Card from "./Card";
import { info, colors } from "../../info";

function createCard(cardData) {
    return (
        <Card 
        key={cardData.name}
        name={cardData.name}
        description={cardData.description}
        tech={cardData.tech}
        live={cardData.live}
        source={cardData.source} />
    );
}

function Projects(props) {
    return (
        <div className="jumbotron" id="projects-intro">
            <div className="row">
                <div className="col col-md-12 col-lg-6">
                    <h1 >Projects</h1>
                    <p>There are plenty of projects I've made to understand, apply, show off, and have fun with web development. Their live links and sources are found below. </p>
                </div>
            </div>

            <div className="row">
                {info["projects"].map(createCard)}
            </div>
        </div>
    );
}

export default Projects;