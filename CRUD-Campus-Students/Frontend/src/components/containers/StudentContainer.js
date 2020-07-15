import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk } from "../../thunks";

import { StudentView } from "../views";

class StudentContainer extends Component {

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  deleteAStudent = (id) =>{
    this.props.deleteStudent(id);
  }

  render() {
    return <StudentView student={this.props.student} deleteAStudent={this.deleteAStudent}/>;
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteAStudent: (id) => dispatch(deleteStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
