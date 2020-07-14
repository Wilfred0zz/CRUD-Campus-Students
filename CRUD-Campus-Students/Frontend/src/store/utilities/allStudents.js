import axios from 'axios';

const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";

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
  
  // REDUCER;
  const reducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_ALL_STUDENTS:
        return action.payload;
      case ADD_STUDENT:
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default reducer;
  