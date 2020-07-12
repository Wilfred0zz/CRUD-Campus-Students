// necessities and accessories for constructing a Redux Store;
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import reducer functions to set up combineReducers here;
// import "everything" from the barrel file, which will is an object containing all of the reducer functions;
import * as reducers from "../reducers";

// construct Redux Store here;
// you can also explicitly set the name of the key in your redux store within the object you are passing to combineReducers;
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleware);

// export Redux Store here so that we can pass it to the Provider wrapper;
export default store;