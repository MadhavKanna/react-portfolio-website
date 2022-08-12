import React from "react"; 

function Intro(){
    return (
        <div className="jumbotron animated slideInRight infinite">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-3 stand-out" id="#hello">Hello, world!</h1>
                        <p className="content">I am <span className="stand-out">Madhav Kanna Thenappan</span>, a passionate problem solver, and
                            web and AI developer studying at University of Toronto, St George.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p>
                            <span className="stand-out">Contact Me:</span> <br />
                            <a target="blank" href="mailto:madhavkanna3141@gmail.com"><i className="contact-icon fa-solid fa-envelope"></i></a>
                            <a target="blank" href="https://www.linkedin.com/in/madhav-kanna-thenappan-688802214/"><i
                                    className="contact-icon fa-solid fa-linkedin"></i></a>
                            <a target="blank" href="https://www.instagram.com/madhav_kanna6321/"><i className="contact-icon fa-brands fa-instagram"></i></a>
                            <a target="blank" href="https://github.com/MadhavKanna"><i className="contact-icon fa-brands fa-github"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;