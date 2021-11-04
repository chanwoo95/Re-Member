import React from "react";
import styles from "./menu.module.css";

const Menu = (props) => (
  <ul className={styles.ul}>
    <li className={styles.li}>
      <button className={styles.button}>Home</button>
    </li>
    <li className={styles.li}>
      <button className={styles.button}>Search</button>
    </li>
    <li className={styles.li}>
      <button className={styles.button}>Work</button>
    </li>
  </ul>
);

export default Menu;
