import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavCollection from "../components/NavCollection";
import apiHandler from "../api/APIHandler";
import "../styles/collection.css";
import BikeCollection from "../components/BikeCollection";

export default function Collection() {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);

  const [A2Filter, setA2Filter] = useState(false);
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

  // ==============================
  // HANDLE BIKES FILTERING
  // ==============================
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
  const filterByA2 = (array) => {
    return array.filter((b) => b.A2 === A2Filter);
  };

  // ==============================
  // HANDLE FILTER CHANGES
  // ==============================
  const handleBrandChange = (e) => {
    setBrandFilter(e.target.value);
    updateSearch();
  };
  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value);
    updateSearch();
  };
  const handleEngineChange = (e) => {
    setEngineFilter(e.target.value);
    updateSearch();
  };
  const handleA2Change = (e) => {
    setA2Filter(e.target.checked);
    updateSearch();
  };

  // ==============================
  // HANDLE GLOBAL SEARCH
  // ==============================
  // const updateSearch = () => {
  //   console.log(brandFilter, typeFilter, engineFilter);
  //   if (brandFilter === "all" && typeFilter === "all") {
  //     setFilteredBikes(filterByEngine(bikes));
  //     console.log("ON: engine", filteredBikes);
  //   } else if (brandFilter === "all" && typeFilter !== "all") {
  //     setFilteredBikes(filterByType(filterByEngine(bikes)));
  //     console.log("ON: engine + type", filteredBikes);
  //   } else if (typeFilter === "all" && brandFilter !== "all") {
  //     setFilteredBikes(filterByBrand(filterByEngine(bikes)));
  //     console.log("ON: engine + brand", filteredBikes);
  //   } else if (brandFilter !== "all" && typeFilter !== "all") {
  //     console.log("ON: engine + brand + type !!!", filteredBikes);
  //     setFilteredBikes(filterByBrand(filterByType(filterByEngine(bikes))));
  //   }
  //   console.log(filteredBikes);
  // };

  // ==============================
  // TEST TEST TEST TEST TEST
  // ==============================
  const updateSearch = () => {
    switch (true) {
      case A2Filter === true: // A2 Filter is active
        switch (true) {
          case brandFilter !== "all" && typeFilter !== "all":
            setFilteredBikes(
              filterByA2(filterByEngine(filterByBrand(filterByType(bikes))))
            );
            console.log("Filter by: ALL ");
            break;
          case brandFilter === "all" && typeFilter !== "all":
            setFilteredBikes(filterByA2(filterByEngine(filterByType(bikes))));
            console.log("Filter by: A2 ENGINE TYPE ");
            break;
          case brandFilter !== "all" && typeFilter === "all":
            setFilteredBikes(filterByA2(filterByEngine(filterByBrand(bikes))));
            console.log("Filter by: A2 ENGINE BRAND ");
            break;
          default:
            setFilteredBikes(filterByA2(filterByEngine(bikes)));
            console.log("Filter by: A2 ENGINE ");
            break;
        }
        break;
      case brandFilter !== "all" && typeFilter !== "all":
        setFilteredBikes(filterByEngine(filterByBrand(filterByType(bikes))));
        console.log("Filter by: ENGINE BRAND TYPE ");
        break;
      case brandFilter === "all" && typeFilter !== "all":
        setFilteredBikes(filterByEngine(filterByType(bikes)));
        console.log("Filter by: ENGINE TYPE ");
        break;
      case brandFilter !== "all" && typeFilter === "all":
        setFilteredBikes(filterByEngine(filterByBrand(bikes)));
        console.log("Filter by: ENGINE BRAND ");
        break;
      default:
        setFilteredBikes(filterByEngine(bikes));
        console.log("Filter by: ENGINE ");
        break;
    }
  };

  // ==============================
  // HANDLE SORTING
  // ==============================
  const handleSortChange = async (e) => {
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
        clbkA2={handleA2Change}
        clbkSort={handleSortChange}
      />
      <h1>Collection page</h1>
      <BikeCollection bikes={filteredBikes} />
    </div>
  );
}
