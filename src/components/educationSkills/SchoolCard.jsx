import React from "react";

function addLink(link){
    if (link.length !== 0) {
        return (<a href={link} className="card-link"><button type="button" className="btn btn-warning">View Certificate</button></a>);
    }
}

function SchoolCard(cardData) {
    return (

        <div className="col col-sm-12 col-md-6 col-lg-4" style={{margin: "0.5rem 0rem 0.5rem 0rem"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title stand-out">{cardData.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{cardData.year}</h6>
                    <p className="card-text">{cardData.institution}</p>
                    {Object.entries(cardData.subjectGrades).map(function([subject, mark]) { return <p className="card-subjects">{subject + ' :' + mark}</p>})}
                    {addLink(cardData.link)}
                </div>
            </div>
        </div>

    );
}

export default SchoolCard;