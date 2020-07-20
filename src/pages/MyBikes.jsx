import React, { useState, useEffect } from "react";

// css
import styles from "../styles/mybikes.module.css";
import "../styles/mybikes.css";

// plugins
import { Link } from "react-router-dom";
import apiHandler from "../api/APIHandler";
import { withRouter } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";

function MyBikes() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    apiHandler
      .get("/bikes/collection")
      .then((apiRes) => {
        setBikes(apiRes.data);
      })
      .catch((apiErr) => console.log(apiErr));
  }, []);

  return (
    <div className="my-bikes-page">
      <TitleBanner title="My bikes" />
      <div className={`${styles.myBikesDiv} my-bikes-div`}>
        {bikes.map((b, i) => (
          <div className="my-bike-container">
            <div
              className="my-bike-photo"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(10, 1, 8, 0.4)), url(${b.image})`,
              }}
            >
              <Link to={`/bike-${b._id}`} id={b._id}>
                <h5>
                  {b.brand} {b.name}
                </h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default withRouter(MyBikes);
