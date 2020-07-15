import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addStudentThunk} from '../../thunks';
import {AddStudentFormView} from '../views';

class AddStudentFormContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        gpa: 0,
        college: 0,
      };
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addStudent(this.state);
    };
    render() {
      return (
        <AddStudentFormView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          gpa={this.state.gpa}
          college={this.state.college}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      );
    }
  }
  
  const mapDispatch = (dispatch) => {
    return {
      addStudent: (student) => dispatch(addStudentThunk(student)),
    };
  };
  
  AddStudentFormContainer.propTypes = {
    addStudent: PropTypes.func.isRequired,
  };
  
  export default connect(null, mapDispatch)(AddStudentFormContainer);
  