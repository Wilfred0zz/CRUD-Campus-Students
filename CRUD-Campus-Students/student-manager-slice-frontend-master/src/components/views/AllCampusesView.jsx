// This is the AllCampusesView file;
import React from "react";

function AllCampusesView(props) {
    return (
        <div>
            <h1>AllCampusesView IS RENDERING HERE</h1>
            {props.allCampuses.map(campus => (
                <div key={campus.id}>
                    <p>Campus's First Name: {campus.name}</p>
                    <p>Campus ID: {campus.id} </p>
                    <h2>Last names of students who go to {campus.name} are</h2>
                    {campus.students.map(student => <div>{student.lastName}</div>)}
                </div>
            ))
            }
        </div>
    )
}

export default AllCampusesView;