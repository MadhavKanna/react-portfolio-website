import React from "react";


function Contact() {
    return (
        <div className="row">
            <div className="col-md-4" style={{textAlign: "center"}}>
                
                    <span className="stand-out"><h4>Contact Me:</h4></span>
                    <a target="blank" href="mailto:madhavkanna3141@gmail.com"><i className="contact-icon fa-solid fa-envelope"></i></a>
                    <a target="blank" href="https://www.linkedin.com/in/madhav-kanna-thenappan-688802214/"><i className="contact-icon fa-brands fa-linkedin"></i></a>
                    <a target="blank" href="https://www.instagram.com/madhav_kanna6321/"><i className="contact-icon fa-brands fa-instagram"></i></a>
                    <a target="blank" href="https://github.com/MadhavKanna"><i className="contact-icon fa-brands fa-github"></i></a>
                
            </div>
        </div>
    );
}

export default Contact;