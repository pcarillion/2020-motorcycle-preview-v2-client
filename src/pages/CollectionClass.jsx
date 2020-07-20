import React, { Component } from "react";
import APIHandler from "../api/APIHandler";
import NavCollection from "../components/NavCollection";
import BikeCollection from "../components/BikeCollection";

// TEST COLLECTION IN CLASS COMPONENT
export default class CollectionClass extends Component {
  state = {
    bikes: [],
    filteredBikes: [],
    A2Filter: false,
    typeFilter: "all",
    brandFilter: "all",
    engineFilter: 1000,
  };

  componentDidMount() {
    APIHandler.get("/bikes/collection")
      .then((apiRes) => {
        this.setState({ bikes: apiRes.data });
        this.setState({ filteredBikes: apiRes.data });
      })
      .catch((apiErr) => console.log(apiErr));
  }

  types = [...new Set(this.state.bikes.map((b) => b.type))];
  brands = [...new Set(this.state.bikes.map((b) => b.brand))];

  // ==============================
  // FILTERS
  // ==============================
  filterBrand = (bikes) => {
    if (this.state.brandFilter === "all") return bikes;
    return bikes.filter((b) => b.brand === this.state.brandFilter);
  };
  filterType = (bikes) => {
    if (this.state.typeFilter === "all") return bikes;
    return bikes.filter((b) => b.type === this.state.typeFilter);
  };
  filterEngine = (bikes) => {
    if (this.state.engineFilter === null) return bikes;
    return bikes.filter((b) => b.engine <= this.state.engineFilter);
  };
  filterA2 = (bikes) => {
    return this.state.A2Filter ? bikes.filter((b) => b.A2) : bikes;
  };

  // ==============================
  // HANDLE FILTER CHANGES
  // ==============================
  handleFilterChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.checked);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value,
    });
    console.log(this.state);
  };
  handleSortChange = (e) => {
    console.log(e.target.name);
  };

  render() {
    return (
      <div className="collection-page">
        <NavCollection
          bikes={this.state.bikes}
          engine={this.state.engineFilter}
          clbkFilter={this.handleFilterChange}
          clbkSort={this.handleSortChange}
        />
        <h1>Collection page</h1>
        <BikeCollection bikes={this.state.filteredBikes} />
      </div>
    );
  }
}
