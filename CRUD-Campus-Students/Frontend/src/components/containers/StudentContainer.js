import React, { Component } from "react";
import { connect } from "react-redux";
import { StudentView } from "../views";
import { 
  fetchStudentThunk, 
  deleteStudentThunk, 
  fetchAllCampusesThunk,
  editStudentThunk,
} from "../../thunks";

class StudentContainer extends Component {
  constructor(){
    super();
    this.state = {
      //initialization of student data members, to be passed as a state
      id: null,
      firstName: null,
      lastName: null,
      email: null, 
      imageUrl: null,
      gpa: null,
      campusId: null,
    };
  }

  onClickEdit = (student) =>{
    console.log("Start on click edit...");
    console.log("Current State: ", this.state);
    console.log("Student: ", student);
    this.setState({
      id: student.id,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email, 
      imageUrl: student.imageUrl,
      gpa: student.gpa,
      //campusId: student.campusId,
    }, () => console.log("States updated, now state is: ", this.state) );
    
  };

  onCancel = () => {
    this.setState({
      id: null,
      firstName: null,
      lastName: null,
      email: null, 
      imageUrl: null,
      gpa: null,
      // campusId: null,
    });
  }

  handleChange = (edit) => {
    this.setState({
      [edit.target.name]: edit.target.value,
    });
  }

  handleEditSubmit = (edit) => {
    edit.preventDefault();
    let student= {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email, 
      imageUrl: this.state.imageUrl,
      gpa: this.state.gpa,
      campusId: this.state.campusId,
    };
    console.log(student);
    this.setState({
      id: null,
      firstName: null,
      lastName: null,
      email: null, 
      imageUrl: null,
      gpa: null,
    });
    this.props.editStudent(student);
  };

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
    return <StudentView 
      student={this.props.student} 
      deleteAStudent={this.props.deleteAStudent} 
      allCampuses={campuses}
      onClickEdit={this.onClickEdit}
      editId={this.state.id}
      firstName={this.state.firstName}
      lastname={this.state.lastName}
      email={this.state.email}
      imageUrl={this.state.imageUrl}
      gpa={this.state.gpa}
      campusId={this.state.campusId}
      onCancel={this.onCancel}
      handleEditSubmit={this.handleEditSubmit}
      handleChange={this.handleChange}
    />;
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
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
