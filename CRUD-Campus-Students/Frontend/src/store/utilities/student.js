import axios from "axios";

// Action Types
const FETCH_STUDENT = "FETCH_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
// Action Creators

const fetchStudent = (student) => {
  return {
    type: FETCH_STUDENT,
    payload: student,
  };
};

const deleteStudent = (id) => {
  return{
    type: DELETE_STUDENT,
    payload: id
  }
}

// Thunk Creators
export const fetchStudentThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/students/${id}`)
    .then((res) => res.data)
    .then((student) => dispatch(fetchStudent(student)))
    .catch((err) => console.log(err));
};

export const deleteStudentThunk = (id) => (dispatch) => {
  return axios 
  .delete(`/api/students/${id}`)
  .then(() => dispatch(deleteStudent(id)))
  .catch((err) => console.log(err));
}


// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    case DELETE_STUDENT:
      const newState = [...state];
      return newState.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
