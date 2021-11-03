import React from "react";
import styles from "./mainhome.module.css";
import Nav from "../nav/nav";
import Introduce from "../introduce/introduce";

const MainHome = (props) => (
  <>
    <div className={styles.nav}>
      <Nav />
    </div>
    <div className={styles.introduce}>
      <Introduce />
    </div>
  </>
);

export default MainHome;
