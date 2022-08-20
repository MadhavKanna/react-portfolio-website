import React from "react"; 
import Navbar from "../Navbar"; 
import Footer from "../Footer"; 
import ProjectCard from "./ProjectCard"; 


function Projects(props) {
    return (
        <div>
            <Navbar />
            <h1 calssName="stand-out">Projects</h1>
            <p>There are plenty of projects I've made to understand, apply and have fun with web development.</p>
            <div className="row">
                
            </div>
            <Footer />
        </div>
    );  
}

export default Projects;