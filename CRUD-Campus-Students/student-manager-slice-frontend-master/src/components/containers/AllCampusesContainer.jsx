// This is the AllCampusesContainer;
import React, { Component } from "react";
import { AllCampusesView } from "../views";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../thunks";

class AllCampusesContainer extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchAllCampuses();
    }

    render() {
        return <AllCampusesView allCampuses={this.props.allCampuses} />
    }
}

function mapState(state) {
    return {
        allCampuses: state.allCampuses
    }
}

function mapDispatch(dispatch) {
    return {
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    }
}

export default connect(mapState, mapDispatch)(AllCampusesContainer);