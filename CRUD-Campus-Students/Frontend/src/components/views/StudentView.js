import React from "react";
import {Link } from "react-router-dom"
/**
 * 
 const student = {
  id: "3434454",
  firstName: "Chase",
  lastName: "Haag",
  email: "ch@gmail.com",
  GPA: "3.5",
};
 */

const StudentView = (props) => {
  return (
    <>
      <h1>Name: {props.student.firstName + " " + props.student.lastName}</h1>
      <p>Email: {props.student.email}</p>
      <p>GPA: {props.student.gpa}</p>
      <p>{props.student.image_URL}</p>
      { 
            props.student.campusId && props.allCampuses[props.student.campusId] ? 
            <Link to={`/campuses/${props.student.campusId}`}>
              <h4>{props.allCampuses[props.student.campusId].name}</h4>
            </Link>
            : 
            null
          }
      <button onClick={() => props.deleteAStudent(props.student.id)}>Delete</button>
    </>
  );
};

export default StudentView;
