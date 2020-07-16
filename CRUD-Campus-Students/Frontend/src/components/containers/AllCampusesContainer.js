import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchAllCampusesThunk,
  deleteCampusThunk,
  editCampusThunk,
} from "../../thunks";
import { AllCampusesView } from "../views";

// Smart container;
class AllCampusesContainer extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: null,
      address: null,
      description: null,
      imageUrl: null,
    };
  }

  onClickEdit = (campus) => {
    this.setState({
      id: campus.id,
      name: campus.name,
      address: campus.address,
      description: campus.description,
      imageUrl: campus.imageUrl,
    });
  };

  onCancel = () => {
    this.setState({
      id: null,
      name: null,
      address: null,
      description: null,
      imageUrl: null,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleEditSubmit = (e) => {
    e.preventDefault();
    let campus = {
      id: this.state.id,
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
    };
    console.log(campus);
    this.setState({
      id: null,
    });
    this.props.editCampus(campus);
  };

  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        hello={this.props.hello}
        deleteCampus={this.props.deleteCampus}
        onClickEdit={this.onClickEdit}
        editID={this.state.id}
        name={this.state.name}
        address={this.state.address}
        description={this.state.description}
        imageUrl={this.state.imageUrl}
        onCancel={this.onCancel}
        handleEditSubmit={this.handleEditSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    hello: "hello world!!!",
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);
