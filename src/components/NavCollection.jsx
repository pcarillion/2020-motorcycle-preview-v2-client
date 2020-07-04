import React, { useState, useEffect } from "react";
import "../styles/nav-collection.css";

export default function NavCollection({
  brands,
  types,
  engine,
  clbkBrand,
  clbkType,
  clbkEngine,
  clbkSort,
}) {
  return (
    <div className="nav-with-filters">
      <form className="collection-filters">
        {/* BRAND FILTER */}
        <label htmlFor="brand">Brand </label>
        <select name="brand" onChange={clbkBrand}>
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
        <label htmlFor="type">Type</label>
        <select name="type" onChange={clbkType}>
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
        <label htmlFor="engine">Engine (cc) </label>
        <input
          type="number"
          name="engine"
          step="100"
          defaultValue={engine}
          onChange={clbkEngine}
        />
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
