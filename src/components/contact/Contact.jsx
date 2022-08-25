import React from "react";
import Links from "./Links";
import {info} from "../../info"; 

function Contact() {
    return (
        

            <div className="jumbotron">
                <div className="container">
                    <div className="row" style={{justifyContent: "center"}}>
                        <h1 className="display-3 stand-out" style={{marginBottom: "2rem"}}>Contact Me!</h1>
                    </div>
                    <Links />
                    <div className="row" style={{textAlign: "center", marginTop: "2rem"}}>
                        <div className="col">
                        <a href={info.resumeLink} className="resume-link"><button type="button" className="btn btn-warning btn-lg">Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>

        
    );
}


export default Contact;