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
      <h1>{props.student.firstName}</h1>
      <h3>{props.student.lastName}</h3>
      <p>{props.student.email}</p>
      <p>{props.student.gpa}</p>
    </>
  );
};

export default StudentView;
