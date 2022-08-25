import React from "react";
import {info} from "../../info"; 
import SchoolCard from "./SchoolCard";
// import CourseCard from "./CourseCard"

function createSchoolCard(cardData) {
    return (
        <SchoolCard key={cardData.name} name={cardData.name} institution={cardData.institution} year={cardData.year} subjectGrades={cardData.subjectGrades} link={cardData.link}/>
    ); 
}

// function createCourseCard(cardData) {
//     return (
//         <CourseCard key={cardData.name} name={cardData.name} />  
//     )
// }
function EducationSkills() {
    return (
        <>
            <div className="jumbotron">
            <div className="row">
                <div className="col col-md-12 col-lg-6">
                    <h1 className="stand-out" >Education</h1>
                </div>
            </div>

            <div className="row">
                {info["education"].map(createSchoolCard)}
            </div>
        </div>
        {/* <div className="jumbotron">
        <div className="row">
            <div className="col col-md-12 col-lg6">
                <h1 className="stand-out"> Courses Taken</h1>
            </div>

            <div className="row">
                {info["skills"].map(createCourseCard)}
            </div>
        </div>
        </div> */}
        </>
    );
}

export default EducationSkills;