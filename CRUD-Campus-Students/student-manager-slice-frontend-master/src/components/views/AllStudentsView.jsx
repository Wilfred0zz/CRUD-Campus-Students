// This is the AllStudentsView file;
import React from "react";

function AllStudentsView(props) {
    return (
        <div>
            <h1>ALLSTUDENTSVIEW IS RENDERING HERE</h1>
            {props.allStudents.map(student => (
                <div key={student.id}>
                    <p>Student's First Name: {student.firstName}</p>
                    <p>Student's Last Name: {student.lastName}</p>
                    <p>Student's ID Number: {student.id}</p>
                    <p>Student's Campus: {student.campus.name}</p>
                    <button onClick={() => props.handleRemoveStudent(student.id)}>Delete Student</button>
                </div>
            ))
            }
        </div>
    )
}

export default AllStudentsView;