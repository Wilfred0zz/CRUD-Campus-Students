import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../thunks";

import { StudentView } from "../views";

class StudentContainer extends Component {

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return <StudentView student={this.props.student} />;
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);