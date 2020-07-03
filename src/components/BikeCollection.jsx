import React from "react";
import { Link } from "react-router-dom";
import "../styles/collection.css";

export default function BikeCollection({ bikes }) {
  return (
    <div className="allBikes-container">
      {bikes.map((b, i) => (
        <div className="bike-container" key={i}>
          <div className="bike-photo">
            <img src={b.image} alt={b.name} />
          </div>
          <div className="bike-infos">
            <h2>
              {b.brand} {b.name}
            </h2>
            <h3>
              {b.engine}cc {b.type}
            </h3>
            <p>{b.price}€</p>
            <Link to={`/bike-${b._id}`} className="see-more" id={b._id}>
              See details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
