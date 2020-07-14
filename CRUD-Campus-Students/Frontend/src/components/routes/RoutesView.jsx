import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./styles/RoutesView.css";

import {
  AllCampusesContainer,
  CampusContainer,
  AddCampusFormContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <div>
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
      </nav>
      <Switch>
        <Route exact path="/" component={AllCampusesContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campuses/new" component={AddCampusFormContainer} />
        <Route exact path="/campuses/:id" component={CampusContainer} />
      </Switch>
    </div>
  );
};

export default RoutesView;
