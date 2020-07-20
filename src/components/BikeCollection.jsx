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
            <Link to={`/bike-${b._id}`} className="see-more" id={b._id}>
              <h2>
                {b.brand} {b.name}
              </h2>
            </Link>
            <h3>
              {b.engine}cc {b.type}
              <br />
              {b.horsepower} HP
            </h3>
            <h4>{b.price}€</h4>
            <Link to={`/bike-${b._id}`} className="see-more" id={b._id}>
              See details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
