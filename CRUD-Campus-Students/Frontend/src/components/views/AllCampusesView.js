import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div className="all-campuses">There are no campuses</div>;
  }

  return (
    <div className="all-campuses">
      {props.allCampuses.map((campus) => (
        <div className="campus-content" key={campus.id}>
          <div className="campus-image">
            <img src={`${campus.imageUrl}`} />
          </div>
          <div className="campus-box">
            <div className="campus-text">
              <Link to={`/campuses/${campus.id}`}>
                <h1> {campus.name}</h1>
              </Link>
              <h4>Address: {campus.address}</h4>
              <p>Description: {campus.description}</p>
              <div className="button-end">
                <button className="">Edit</button>
                <button className="">Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
