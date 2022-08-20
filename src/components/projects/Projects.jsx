import React from "react";
import ProjectCard from "./ProjectCard";
import { info, colors } from "../../info";


function createCard(cardData) {
    return (
        <div className="col col-sm-12 col-md-4 col-lg-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{cardData.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{cardData.tech}</h6>
                    <p class="card-text">{cardData.description}</p>
                    <a href={cardData.live} class="card-link">Live Link</a>
                    <a href={cardData.source} class="card-link">Github Repo Link</a>
                </div>
            </div>
        </div>

    );
}

function Projects(props) {
    return (
        <div>
            <h1 calssName="stand-out">Projects</h1>
            <p>There are plenty of projects I've made to understand, apply and have fun with web development.</p>
            <div className="row">
                {info["projects"].map(createCard)}
            </div>
        </div>
    );
}

export default Projects;