import React from "react";

function createList(listItem) {
    return (
        <p key={listItem}>⚡ {listItem}</p>
    );
}

function createLogo(logo) {
    return (
        <a data-bs-toggle="tooltip" data-bs-placement="top" title={logo[0]} key={logo}>
            <i className={"doing-logo fa-5x fa-brands " + logo[1]} key={logo} />
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
            <h1 className="heading">What I get up to</h1>

            {props["data"].map(createCard)}


            <hr />

        </div>
    );
}

export default Doing;