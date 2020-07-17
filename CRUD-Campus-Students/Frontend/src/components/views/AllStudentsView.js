import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-campuses">There are no students</div>;
  }

  return (
    <div className="all-campuses">
    <div className="student-content">
      {props.allStudents.map((student) => (
        <div key={student.id} className="student-text">
          <Link to={`/students/${student.id}`}>
            <h2>{student.firstName + " " + student.lastName}</h2>
          </Link>
          { 
            student.campusId && props.allCampuses[student.campusId] ? 
            <Link to={`/campuses/${student.campusId}`}>
              <h4>{props.allCampuses[student.campusId].name}</h4>
            </Link>
            : 
            null
          }

            <button className="campus-text-button" onClick={() => props.deleteAStudent(student.id)} >Delete</button>
        </div>
      ))}
    </div>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
