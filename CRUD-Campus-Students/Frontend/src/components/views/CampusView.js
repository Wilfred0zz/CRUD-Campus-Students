import React from "react";
import { Link } from "react-router-dom";

/**
 * 
 const campus = {
  id: "3434454",
  name: "Brooklyn College",
  address: "Brooklyn",
  imageUrl: "",
  description: "A college in Brooklyn",
};
 */

const CampusView = (props) => {
  return (
    <div>
      <h1>{props.campus.name}</h1>
      <h3>{props.campus.address}</h3>
      <p>{props.campus.description}</p>
      <p>{props.campus.students} Students</p>
      {props.allStudents.map(student => {
        return student.campusId === props.campus.id ?
        <div key={student.id}> 
           <Link to={`/students/${student.id}`}>
            <h4>{student.firstName + " " + student.lastName}</h4>
          </Link>
          <h5>{props.campus.name}</h5>
        </div>
        :
        null
      })}
    </div>
  );
};

export default CampusView;
