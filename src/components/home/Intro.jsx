import React from "react"; 
import Contact from "./Contact";

function Intro(){
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <h1 className="display-3 stand-out" id="#hello">Hello, world!</h1>
                        <p className="content">I am <span className="stand-out">Madhav Kanna Thenappan</span>, a passionate problem solver, and
                            web and AI developer studying at University of Toronto, St George.</p>
                    </div>
                </div>
                <Contact />
            </div>
        </div>
    );
}

export default Intro;