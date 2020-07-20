import React from "react";
import "../styles/bike-banner.css";

export default function BikeBanner({ bikeName }) {
  return (
    <div className="bike-banner">
      <h1 className="bike-banner-title">{bikeName}</h1>
    </div>
  );
}
