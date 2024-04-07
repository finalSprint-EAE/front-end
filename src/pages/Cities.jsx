import React, { Component } from "react";
import Table from "../components/Table";

class CitiesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { cities: [] };
    }

    componentDidMount() {
        fetch('http://localhost:8080/cities')
            .then(res => res.json())
            .then(cities => this.setState({ cities }));
    }

    render() {
        return <Table cities={this.state.cities} />;
    }
}

export default CitiesPage;