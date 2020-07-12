import axios from "axios";

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const REMOVE_A_STUDENT = "REMOVE_A_STUDENT";
const ADD_A_STUDENT = "ADD_A_STUDENT";

// ACTION CREATORS;
function fetchAllStudents(students) {
    return {
        type: FETCH_ALL_STUDENTS,
        payload: students
    }
}

function removeAStudent(id) {
    return {
        type: REMOVE_A_STUDENT,
        payload: id
    }
}

function addAStudent(studentToAdd) {
    return {
        type: ADD_A_STUDENT,
        payload: studentToAdd
    }
}

// THUNKS;
// These will be called in the anonymous function of our mapDispatch of one of our React components;
export function fetchAllStudentsThunk() {
    return function (dispatch) {
        axios
            .get("/api/students")
            .then(res => res.data)
            .then(students => dispatch(fetchAllStudents(students)))
    }
}

export function removeStudentThunk(id) {
    return function (dispatch) {
        axios
            .delete(`/api/students/${id}`)
            .then(res => res.data)
            .then(() => dispatch(removeAStudent(id)))
            .catch(err => console.log(err))
    }
}

export function addAStudentThunk(studentToAdd) {
    return function (dispatch) {
        axios
            .post("/api/students", studentToAdd)
            .then(res => res.data)
            .then(addedStudent => dispatch(addAStudent(addedStudent)));
    }
}

// REDUCER;
function allStudentsReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_STUDENTS:
            return action.payload;
        case REMOVE_A_STUDENT:
            return state.filter(student => student.id !== action.payload);
        case ADD_A_STUDENT:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default allStudentsReducer;