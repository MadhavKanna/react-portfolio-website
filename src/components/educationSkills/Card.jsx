import React from "react";

function Card(cardData) {
    return (

        <div className="col col-sm-12 col-md-6 col-lg-4">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title stand-out">{cardData.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{cardData.year}</h6>
                    <p className="card-text">{cardData.description}</p>
                    <a href={cardData.live} className="card-link"><button type="button" class="btn btn-warning">Live Link</button></a>
                    <a href={cardData.source} className="card-link"><button type="button" class="btn btn-warning">Github Link</button></a>
                </div>
            </div>
        </div>

    );
}

export default Card;