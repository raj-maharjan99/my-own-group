import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <img
          className={styles.image}
          src="https://static.vecteezy.com/system/resources/thumbnails/006/423/232/small/rhino-head-icon-logo-in-a-circle-for-company-community-and-more-free-vector.jpg"
          alt="Logo"
        />

        <marquee className={styles.marquee}>
          <h1>FRONT-END DEVLOPER COURSE</h1>
        </marquee>
      </div>
    </>
  );
}

export default Header;
