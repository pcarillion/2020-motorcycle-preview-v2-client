import React from "react";

// css
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.videoDiv}>
      <div className={styles.videoBlock}>
        <video preload="preload" id="video" autoplay="autoplay" loop="loop">
          <source src="./../../videoCollection3.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default Home;
