import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <marquee behavior="" direction="left">
          <h1>FRONTEND DEVLOPER</h1>
        </marquee>
      </div>
    </>
  );
}

export default Header;
