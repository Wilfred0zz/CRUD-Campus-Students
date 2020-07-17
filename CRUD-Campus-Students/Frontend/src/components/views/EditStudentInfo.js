import React from "react";
import PropTypes from "prop-types";

const AddStudentFormView = (props) => {
  console.log(props.allCampuses)
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          First Name:{" "}
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Last Name:{" "}
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          email:{" "}
          <input
            value={props.email}
            name="email"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Campus:{" "}
          <select
            value={props.campusId}
            name="campusId"
            onChange={props.handleChange}
          >
            {props.allCampuses.map(campus => <option value= {campus.id} key={campus.name}> {campus.name} </option>)}
            <option value= ''> No Campus</option>
          </select>
        </div>
        <div>
          GPA:{" "}
          <input
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <button>Add Student</button>
      </form>
    </div>
  );
};

AddStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AddStudentFormView;
