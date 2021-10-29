import react from "react";
import Menu from "../menu/menu";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav>
      <h2>Re.Member</h2>
      <div className={styles.menu}>
        <Menu />
      </div>
    </nav>
  );
};

export default Nav;
