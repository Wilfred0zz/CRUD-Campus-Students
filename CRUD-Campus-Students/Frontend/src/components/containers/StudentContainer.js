import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk,fetchAllCampusesThunk } from "../../thunks";

import { StudentView } from "../views";

class StudentContainer extends Component {

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
    this.props.fetchAllCampuses();
  }

  deleteAStudent = (id) =>{
    this.props.deleteStudent(id);
    window.location = '/students'; 
  }

  render() {
    const campuses = {};
    for (const campus of this.props.allCampuses) {
      campuses[campus.id] = campus;
    }
    return <StudentView student={this.props.student} deleteAStudent={this.props.deleteAStudent} allCampuses={campuses}/>;
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteAStudent: (id) => dispatch(deleteStudentThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
