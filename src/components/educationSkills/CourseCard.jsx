import React from "react"; 


function CourseCard(cardData){
    return (
        <div className="col col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title stand-out">{cardData.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{cardData.year}</h6>
                    <p className="card-text">{cardData.institution}</p>
                    {Object.entries(cardData.subjectGrades).map(function([subject, mark]) { return <p className="card-subjects">{subject + ' :' + mark}</p>})}

                </div>
            </div>
        </div>
    );

}

export default CourseCard;