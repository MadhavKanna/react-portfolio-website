import React from "react";

function createList(listItem) {
    return (
        <p>⚡ {listItem}</p>
    );
}

function createLogo(logo) {
    console.log(logo[0]);
    return (
        <a data-bs-toggle="tooltip" data-bs-placement="top" title={logo[0]}>
            <i className={"doing-logo fa-5x fa-brands " + logo[1]} />
        </a>


    )
}
function createCard(item) {
    return (
        <div className="row">
            <div className="col-lg-6">
                <h2 className="stand-out">{item["name"]}</h2>
                {item["list"].map(createList)}

            </div>

            <div className="col-lg-6">
                {/* <i className="fa-brands fa-html5" />     */}
                {/* {item["logos"].map(createLogo)} */}
                {Object.entries(item["logos"]).map(createLogo)}

            </div>


        </div>
    );
}


function Doing(props) {
    return (
        <div className="container">
            <h2 className="heading">What I get up to</h2>

            {props["data"].map(createCard)}


            <hr />

        </div>
    );
}

export default Doing;