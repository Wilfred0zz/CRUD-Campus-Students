import axios from "axios";

// ACTION TYPES;
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";

// ACTION CREATORS;
function fetchAllCampuses(campuses) {
  return {
    type: FETCH_ALL_CAMPUSES,
    payload: campuses
  }
}

// THUNKS;
// These will be called in the anonymous function of our mapDispatch of one of our React components;
export function fetchAllCampusesThunk() {
  return function (dispatch) {
    axios
      .get("/api/campuses")
      .then(res => res.data)
      .then(campuses => dispatch(fetchAllCampuses(campuses)))
  }
}

// REDUCER;
function allCampusesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_CAMPUSES:
      return action.payload;
    default:
      return state;
  }
}

export default allCampusesReducer;