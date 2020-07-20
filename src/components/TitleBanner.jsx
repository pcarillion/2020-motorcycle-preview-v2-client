import React from "react";
import "../styles/title-banner.css";

export default function TitleBanner({ title }) {
  return (
    <div className="banner">
      <h1 className='banner-title'>{title}</h1>
    </div>
  );
}
