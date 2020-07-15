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
        image_URL: "",
      };
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.firstName === "" || !this.state.firstName){
        return alert("please enter student first name");
      }
      if(this.state.lastName === "" || !this.state.lastName){
        return alert("please make sure you enter your last name")
      }
      if(this.state.email === "" || !this.state.email){
        return alert("please make sure you entered the students email") 
      }
      if(this.state.gpa < 0 || this.state.gpa > 4.0){
        return alert("enter a valid gpa value")
      }
      this.props.addStudent(this.state);
    };
    render() {
      return (
        <AddStudentFormView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          image_URL={this.state.image_URL}
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
  