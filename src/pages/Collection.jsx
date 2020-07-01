import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavCollection from "../components/NavCollection";
import Nav from "../components/Nav";
import apiHandler from "../api/APIHandler";
import "../styles/collection.css";

export default function Collection() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    apiHandler
      .get("/bikes/collection")
      .then((apiRes) => {
        setBikes(apiRes.data);
        console.log(apiRes.data);
      })
      .catch((apiErr) => console.log(apiErr));
  }, []);

  return (
    <div>
      <NavCollection />
      <h1>Collection page</h1>
      <div className="allBikes-container">
        {bikes.map((b, i) => (
          <div className="bike-container">
            <div className="bike-photo">
              <img src={b.image} alt={b.name} />
            </div>
            <div className="bike-infos">
              <h2>
                {b.brand} {b.name}
              </h2>
              <hr />
              <h3>
                {b.engine}cc {b.type}
              </h3>
              <p>{b.price}€</p>
              <Link to={`/one-bike-${b._id}`} className="see-more">
                See details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
