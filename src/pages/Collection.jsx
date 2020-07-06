import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavCollection from "../components/NavCollection";
import apiHandler from "../api/APIHandler";
import "../styles/collection.css";
import BikeCollection from "../components/BikeCollection";

export default function Collection() {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);

  const [typeFilter, setTypeFilter] = useState("all");
  const [brandFilter, setBrandFilter] = useState("all");
  const [engineFilter, setEngineFilter] = useState(1000);

  const types = [...new Set(bikes.map((b) => b.type))];
  const brands = [...new Set(bikes.map((b) => b.brand))];

  useEffect(() => {
    apiHandler
      .get("/bikes/collection")
      .then((apiRes) => {
        setBikes(apiRes.data);
        setFilteredBikes(apiRes.data);
      })
      .catch((apiErr) => console.log(apiErr));
  }, []);

  // HANDLE BIKES FILTERING
  const filterByBrand = (array) => {
    if (brandFilter === "all") return array;
    return array.filter((b) => b.brand === brandFilter);
  };
  const filterByType = (array) => {
    if (typeFilter === "all") return array;
    return array.filter((b) => b.type === typeFilter);
  };
  const filterByEngine = (array) => {
    return array.filter((b) => b.engine <= engineFilter);
  };

  // HANDLE FILTER CHANGES
  const handleBrandChange = (e) => {
    console.log(e.target.name, e.target.value);
    setBrandFilter(e.target.value);
    updateSearch();
  };
  const handleTypeChange = (e) => {
    console.log(e.target.name, e.target.value);
    setTypeFilter(e.target.value);
    updateSearch();
  };
  const handleEngineChange = (e) => {
    console.log(e.target.name, e.target.value);
    setEngineFilter(e.target.value);
    updateSearch();
  };

  const updateSearch = () => {
    if (brandFilter === "all" && typeFilter === "all") {
      setFilteredBikes(filterByEngine(bikes));
      console.log("ON: engine");
    } else if (brandFilter === "all" && typeFilter !== "all") {
      setFilteredBikes(filterByType(filterByEngine(bikes)));
      console.log("ON: engine + type");
    } else if (typeFilter === "all" && brandFilter !== "all") {
      setFilteredBikes(filterByBrand(filterByEngine(bikes)));
      console.log("ON: engine + brand");
    } else if (brandFilter !== "all" && typeFilter !== "all") {
      console.log("ON: engine + brand + type !!!");
      setFilteredBikes(filterByBrand(filterByType(filterByEngine(bikes))));
    }
    console.log(filteredBikes);
  };

  // HANDLE SORTING
  const handleSortChange = (e) => {
    console.log(e.target.name);
    let sorted = [];
    if (e.target.name === "brand-sort") {
      sorted = [...filteredBikes].sort((a, b) =>
        a.brand.localeCompare(b.brand)
      );
      setFilteredBikes(sorted);
      // filteredBikes.sort((a, b) => a.brand.localeCompare(b.brand))
    }
    if (e.target.name === "type-sort") {
      sorted = [...filteredBikes].sort((a, b) =>
        a.brand.localeCompare(b.brand)
      );
      setFilteredBikes(sorted);
      // filteredBikes.sort((a, b) => a.type.localeCompare(b.type))
    }
    if (e.target.name === "engine-sort") {
      setFilteredBikes(filteredBikes.sort((a, b) => a.engine - b.engine));
    }
    console.log(filteredBikes);
  };

  return (
    <div className="collection-page">
      <NavCollection
        brands={brands}
        types={types}
        engine={engineFilter}
        clbkBrand={handleBrandChange}
        clbkType={handleTypeChange}
        clbkEngine={handleEngineChange}
        clbkSort={handleSortChange}
      />
      <h1>Collection page</h1>
      <BikeCollection bikes={filteredBikes} />
    </div>
  );
}
