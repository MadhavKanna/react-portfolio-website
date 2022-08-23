import React from "react";
import {info, colors} from "../../info"; 
import Card from "./Card";

function EducationSkills() {
    return (
        <div>
            <div className="jumbotron" id="projects-intro">
            <div className="row">
                <div className="col col-md-12 col-lg-6">
                    <h1 className="stand-out">Education & Skills</h1>
                </div>
            </div>

            <div className="row">
                {info["projects"].map(createCard)}
            </div>
        </div>
        </div>
    );
}

export default EducationSkills;