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
  const {deleteAStudent, onClickEdit, editID, allCampuses, student} = props;
  //const student = props.student;
  console.log("Student id: ", student.id);
  console.log("edit id:", editID);
    if(student.id === editID ) {
      return(
        <div key={student.id} className="editStudent-panel">
          <form className="editStudent-form" onSubmit={props.handleEditSubmit}>
            <h1 className="input-intro">Edit the Campus Info Below</h1>
              <div className="input-style-row">
                {/* firstName*/}
                  <input
                    defaultValue={student.firstName}
                    name="first name"
                    placeholder="First Name"
                    onChange={props.handleChange}
                  ></input>
              </div>
              <div className="input-style-row">
                {/* lastName */}
                <input
                  defaultValue={student.lastName}
                  name="last name"
                  placeholder="Last Name"
                  onChange={props.handleChange}
                ></input>
              </div>
              <div className="input-style-row">
                {/* email */}
                <input
                  defaultValue={student.email}
                  name="email"
                  placeholder="Email"
                  onChange={props.handleChange}
                ></input>
              </div>
              <div className="input-style-row">
                {/*gpa*/}
                <input
                  defaultValue={student.gpa}
                  name="gpa"
                  placeholder="GPA"
                  onChange={props.handleChange}
                  ></input>
              </div>
              <div className="input-style-row">
                {/*Campus*/}   
              <select
                defaultValue={props.campusId}
                name="campusId"
                placeholder="Campus"
                onChange={props.handleChange}
              >
              {/* {allCampuses.map(campus => <option value= {campus.id} key={campus.name}> {campus.name} </option>)} */}
              <option value= ''> No Campus</option>
              </select>
              </div>

              <button
                className="cancel-student-button"
                onClick={() => props.onCancel}
              >Cancel</button>
              <button
                className="save-student-button"
                type="submit"
                value="submit"
              >Save</button>
          </form>
        </div>
      );} else{
        return(
        <>
        <h1>Name: {student.firstName + " " + student.lastName}</h1>
        <p>Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>
        <p>{student.image_URL}</p>
        <div>{ 
              student.campusId && allCampuses[student.campusId] ? 
              <Link to={`/campuses/${student.campusId}`}>
                <h4>{props.allCampuses[student.campusId].name}</h4>
              </Link>
              : 
              null
        }</div>
        <button onClick={() => onClickEdit(student)}>Edit Student</button>
        {/* <button onClick={() => deleteAStudent(props.student.id)}>Delete</button> */}
        </>
      )}
};

export default StudentView;
