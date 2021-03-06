import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, fetchAllStudentsThunk } from "../../thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents();
  }

  render() {
    return <CampusView campus={this.props.campus} allStudents={this.props.allStudents}/>;
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
    allStudents: state.allStudents
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
