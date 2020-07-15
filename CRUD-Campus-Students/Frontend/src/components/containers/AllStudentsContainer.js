import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk } from "../../thunks";
import { AllStudentsView } from "../views";

// Smart container;
class AllStudentsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
  }

  deleteAStudent = (id) =>{
    this.props.deleteStudent(id);
  }
  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        hello={this.props.hello}
        deleteAStudent={this.deleteAStudent}
      />
    );
  }
}


// Map state to props;
const mapState = (state) => {
  return {
    hello: "Here are all the students",
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteAStudent: (id) => dispatch(deleteStudentThunk(id))
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);
