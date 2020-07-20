import React from "react";
import "../styles/nav-collection.css";

export default function NavCollection({
  brands,
  types,
  engine,
  clbkBrand,
  clbkType,
  clbkEngine,
  clbkA2,
  clbkSort,
  // clbkFilter,
}) {

  return (
    <div className="nav-with-filters">
      <form className="collection-filters">
        {/* BRAND FILTER */}
        <label htmlFor="brandFilter">Brand </label>
        <select name="brandFilter" onChange={clbkBrand}>
        {/* <select name="brandFilter"> */}
          <option selected value="all">
            All brands
          </option>
          {brands.map((brand, i) => (
            <option value={brand} key={i}>
              {brand}
            </option>
          ))}
        </select>

        {/* TYPE FILTER */}
        <label htmlFor="typeFilter">Type</label>
        <select name="typeFilter" onChange={clbkType}>
        {/* <select name="typeFilter"> */}
          <option selected value="all">
            All types
          </option>
          {types.map((type, i) => (
            <option value={type} key={i}>
              {type}
            </option>
          ))}
        </select>

        {/* ENGINE FILTER */}
        <label htmlFor="engineFilter">Engine (cc) </label>
        <input
          type="number"
          name="engineFilter"
          step="100"
          defaultValue={engine}
          onChange={clbkEngine}
        />

        {/* a2 FILTER */}
        <label htmlFor="A2Filter">A2 </label>
        <input type="checkbox" name="a2" onChange={clbkA2} />
        {/* <input type="checkbox" name="A2Filter" /> */}
      </form>

      {/* SORTING */}
      <div className="collection-sorting">
        <button onClick={clbkSort} name="brand-sort">
          Sort by brand
        </button>
        <button onClick={clbkSort} name="engine-sort">
          Sort by engine
        </button>
        <button onClick={clbkSort} name="type-sort">
          Sort by type
        </button>
      </div>
    </div>
  );
}
