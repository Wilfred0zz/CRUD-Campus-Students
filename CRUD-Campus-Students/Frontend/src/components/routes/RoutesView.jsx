import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./styles/RoutesView.css";

import {
  AllCampusesContainer,
  CampusContainer,
  AddCampusFormContainer,
  AllStudentsContainer,
  StudentContainer,
  AddStudentFormContainer,
} from "../containers";

const RoutesView = () => {
  return (

    <div className="page-container">
      <nav className="app-nav">
        <Link className="nav-item nav-link" to="/campuses">
          All Campuses
        </Link>
        <Link className="nav-item nav-link" to="/campuses/new">
          Add New Campus
        </Link>

        {/* Later add a new table */}
        <Link className="nav-item nav-link" to="/students" id="students-tab">
          Students
        </Link>
        <Link className="nav-item nav-link" to="/students/add">
          Add New Student
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={AllCampusesContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campuses/new" component={AddCampusFormContainer} />
        <Route exact path="/campuses/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer}/>
        <Route exact path="/students/add" component={AddStudentFormContainer} />
        <Route exact path="/students/:id" component={StudentContainer}/>
      </Switch>
    </div>
  );
};

export default RoutesView;
