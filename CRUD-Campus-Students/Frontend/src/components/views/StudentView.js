import React from "react";

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
      <button onClick={() => props.deleteAStudent(props.student.id)}>Delete</button>
    </>
  );
};

export default StudentView;
