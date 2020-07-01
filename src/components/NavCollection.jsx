import React from "react";

export default function NavCollection() {
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit} className="collection-filters">
        <label htmlFor="brand">Brand</label>
        <select name="brand">
          <option value="yamaha">Yamaha</option>
          <option value="kawasaki">Kawasaki</option>
          <option value="ducati">Ducati</option>
        </select>
        <label htmlFor="engine">Engine</label>
        <select name="engine">
          <option value="small"> &lt;600 </option>
          <option value="medium"> &lt;800 </option>
          <option value="high"> &gt;1000 </option>
        </select>
        <label htmlFor="type">Type</label>
        <select name="type">
          <option value="roadster">Roadster</option>
          <option value="sportive">Sportive</option>
        </select>
      </form>
      <div className="collection-sorting">
          <button>Sort by brand</button>
          <button>Sort by engine</button>
          <button>Sort by type</button>
      </div>
    </div>
  );
}
