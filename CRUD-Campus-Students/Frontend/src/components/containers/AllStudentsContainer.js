import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk, fetchAllCampusesThunk } from "../../thunks";
import { AllStudentsView } from "../views";

// Smart container;
class AllStudentsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
    this.props.fetchAllCampuses();
  }

  deleteAStudent = (id) =>{
    this.props.deleteStudent(id);
    window.location='/students'
  }
  render() {

    const campuses = {};
    for (const campus of this.props.allCampuses) {
      campuses[campus.id] = campus;
    }
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        hello={this.props.hello}
        deleteAStudent={this.props.deleteAStudent}
        allCampuses={campuses}
      />
    );
  }
}


// Map state to props;
const mapState = (state) => {
  return {
    hello: "Here are all the students",
    allStudents: state.allStudents,
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteAStudent: (id) => dispatch(deleteStudentThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
  fetchAllCampuses : PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);
