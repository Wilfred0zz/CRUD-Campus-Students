import React from "react";
import PropTypes from "prop-types";

const AddCampusFormView = (props) => {
  return (
    <div className="addcampuses-panel">
      <form className="addcampus-form" onSubmit={props.handleSubmit}>
        <div className="input-style-row">
          {/* Name:{" "} */}
          <input
            value={props.name}
            name="name"
            placeholder="Campus Name"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="input-style-row">
          {/* Address:{" "} */}
          <input
            value={props.address}
            name="address"
            placeholder="Campus Address"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="input-style-row">
          {/* Description:{" "} */}
          <input
            value={props.description}
            name="description"
            placeholder="Campus Description"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="input-style-row">
          {/* Image Url:{" "} */}
          <input
            value={props.imageUrl}
            name="imageUrl"
            placeholder="Campus Image URL"
            onChange={props.handleChange}
          ></input>
        </div>

        <button className="create-campus-button">Create Campus</button>
      </form>
    </div>
  );
};

AddCampusFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default AddCampusFormView;
