import React from "react"; 

function createList(listItem){
    return (
        <p>⚡ {listItem}</p>
    ); 
}

function createCard(item){
    return (
        <div className="row">
                <div className="col-lg-6">
                    <h2 className="stand-out">{item["name"]}</h2>
                    {item["list"].map(createList)}
                    
                </div>
                
            </div>
    ); 
}

function Doing(props){ 
    return (
        <div className="container">
            <h2 className="heading">What I get up to</h2>
            
            {props["data"].map(createCard)}
            <hr />

        </div>
    ); 
}

export default Doing;