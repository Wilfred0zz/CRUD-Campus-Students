import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const { deleteCampus, onClickEdit, editID } = props;

  if (!props.allCampuses.length) {
    return <div className="all-campuses">There are no campuses</div>;
  }

  return (
    <div className="all-campuses">
      {props.allCampuses.map((campus) => {
        return (
          <div>
            {campus.id === editID ? (
              <div key={campus.id} className="editcampuses-panel">
                <form
                  className="editcampus-form"
                  onSubmit={props.handleEditSubmit}
                >
                  <h1 className="input-intro">Edit the Campus Info Below</h1>
                  <div className="input-style-row">
                    {/* Name:{" "} */}
                    <input
                      defaultValue={props.name}
                      name="name"
                      placeholder="Campus Name"
                      onChange={props.handleChange}
                    ></input>
                  </div>
                  <div className="input-style-row">
                    {/* Address:{" "} */}
                    <input
                      defaultValue={props.address}
                      name="address"
                      placeholder="Address"
                      onChange={props.handleChange}
                    ></input>
                  </div>
                  <div className="input-style-row">
                    {/* Description:{" "} */}
                    <input
                      defaultValue={props.description}
                      name="description"
                      placeholder="Description"
                      onChange={props.handleChange}
                    ></input>
                  </div>
                  <div className="input-style-row">
                    {/* Image Url:{" "} */}
                    <input
                      defaultValue={props.imageUrl}
                      name="imageUrl"
                      placeholder="Image URL"
                      onChange={props.handleChange}
                    ></input>
                  </div>

                  <button
                    className="cancel-campus-button"
                    onClick={() => props.onCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="cancel-campus-button"
                    type="submit"
                    value="submit"
                  >
                    Save
                  </button>
                </form>
              </div>
            ) : (
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
                      <button
                        className="campus-text-button"
                        onClick={() => onClickEdit(campus)}
                      >
                        Edit
                      </button>
                      <button
                        className="campus-text-button"
                        onClick={() => deleteCampus(campus.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
