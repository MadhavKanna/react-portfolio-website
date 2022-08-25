import React from "react";

function Links() {
    return (
        <div className="row" style={{justifyContent: "center"}}>
            {/* <div className="col-md-12 col-lg-6">
                 </div>
            <div className="col-md-12 col-lg-6">
                </div>
            <div className="col-md-12 col-lg-6 ">
                </div>
            <div className="col-md-12 col-lg-6">
                </div> */}
                <a target="blank" href="mailto:madhavkanna3141@gmail.com"><i className="contact-page-icon fa-solid fa-envelope"></i></a>
                <a target="blank" href="https://www.linkedin.com/in/madhav-kanna-thenappan-688802214/"><i className="contact-page-icon fa-brands fa-linkedin"></i></a>
                <a target="blank" href="https://www.instagram.com/madhav_kanna6321/"><i className="contact-page-icon fa-brands fa-instagram"></i></a>
                <a target="blank" href="https://github.com/MadhavKanna"><i className="contact-page-icon fa-brands fa-github"></i></a>
        </div>

    );
}

export default Links;