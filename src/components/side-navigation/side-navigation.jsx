import React from "react";
import { Link } from "react-router-dom";
import styles from "./side-navigation.module.css";

const SideNavigation = () => {
  return (
    <div>
      <header className={styles.header}>
        <Link to="/">
          <h2 className={styles.title}>Re.Member</h2>
        </Link>
      </header>
      <div className={styles.navGroup}>
        <ul className={styles.list}>
          <Link to="/">
            <li className={styles.item}>Home</li>
          </Link>
          <Link to="/search">
            <li className={styles.item}>Search</li>
          </Link>
          <Link to="/work">
            <li className={styles.item}>Work</li>
          </Link>
        </ul>
      </div>
      <footer className={styles.footer}>
        <div>state</div>
      </footer>
    </div>
  );
};

export default SideNavigation;
