import axios from 'axios';

const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
// ACTION CREATORS;
const fetchAllStudents = (students) => {
    return {
      type: FETCH_ALL_STUDENTS,
      payload: students,
    };
  };
  
  const addStudent = (student) => {
    return {
      type: ADD_STUDENT,
      payload: student,
    };
  };

  const deleteStudent = (id) => {
    return{
      type: DELETE_STUDENT,
      payload: id
    }
  }

  // THUNK CREATORS;
export const fetchAllStudentsThunk = () => (dispatch) => {
    return axios
      .get("/api/students")
      .then((res) => res.data)
      .then((students) => dispatch(fetchAllStudents(students)))
      .catch((err) => console.log(err));
  };
  
  export const addStudentThunk = (student) => (dispatch) => {
    return axios
      .post("/api/students", student)
      .then((res) => res.data)
      .then((newStudent) => dispatch(addStudent(newStudent)))
      .catch((err) => console.log(err));
  };
  
  export const deleteStudentThunk = (id) => (dispatch) => {
    return axios 
    .delete(`/api/students/${id}`)
    .then(() => dispatch(deleteStudent(id)))
    .catch((err) => console.log(err));
  }
  
  // REDUCER;
  const reducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_ALL_STUDENTS:
        return action.payload;
      case ADD_STUDENT:
        return [...state, action.payload];
      case DELETE_STUDENT:
        return state.filter((student) => student.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default reducer;
  