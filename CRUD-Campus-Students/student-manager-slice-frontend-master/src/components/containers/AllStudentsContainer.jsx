// This is the AllStudentsContainer;
import React, { Component } from "react";
import { AllStudentsView } from "../views";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, removeStudentThunk } from "../../thunks";

class AllStudentsContainer extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchAllStudents();
    }

    handleRemoveStudent = (id) => {
        this.props.removeAStudent(id);
    }

    render() {
        return <AllStudentsView allStudents={this.props.allStudents} handleRemoveStudent={this.handleRemoveStudent} />
    }
}

function mapState(state) {
    return {
        allStudents: state.allStudents
    }
}

function mapDispatch(dispatch) {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        removeAStudent: (id) => dispatch(removeStudentThunk(id))
    }
}

export default connect(mapState, mapDispatch)(AllStudentsContainer);