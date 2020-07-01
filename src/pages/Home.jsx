import React from "react";

// css
import styles from "../styles/home.module.css";
import '../styles/home.css'

// plugins
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className={`${styles.videoDiv} video-div`}>
      <div className={`${styles.videoBlock} video-block`}>
        <video preload="preload" id="video" autoplay="autoplay" loop="loop">
          <source src="./../../videoCollection3.mp4" type="video/mp4"></source>
        </video>
      </div>
      <Link to="/collection">
        <div className={`${styles.title} title`}>
            2020 MOTORCYCLES PREVIEWS
        </div>
      </Link>
    </div>
  );
};

export default Home;
