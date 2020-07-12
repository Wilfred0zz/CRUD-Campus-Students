// This might be more appropriate as a file in another directory titled "forms";
// Not all components benefit from being separated out into Smart Containers and Presentational Components;
// Forms are a good example of something that can live in one sole component like so;
import React, { Component } from "react";
import { addAStudentThunk } from "../../thunks";
import { connect } from "react-redux";

class AddStudentForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addAStudent(this.state);
    }

    render() {
        // normally, you will grab the id of the student not from an input form (the user would not know which id to pick) but from the URL bar through parameterized routing;
        // if you look at the redux logger in the console, you will see that any student you add will have an id with a value that is not an integer but a string (ignore this as this would be taken care of in a more realistic scenario);
        // it is also a minor point for this lesson;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input name="firstName" type="text" onChange={this.handleChange}></input>
                <label htmlFor="lastName">Last Name:</label>
                <input name="lastName" type="text" onChange={this.handleChange}></input>
                <button>Add Student</button>
            </form>
        )
    }
}

function mapDispatch(dispatch) {
    return {
        addAStudent: (studentToAdd) => dispatch(addAStudentThunk(studentToAdd))
    }
}

// if you do not need any slice of state from the redux store, you can pass in null in place of mapState;
export default connect(null, mapDispatch)(AddStudentForm);