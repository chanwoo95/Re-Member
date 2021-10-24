import react from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>re.member</h1>
    </header>
  );
}

export default Header;
