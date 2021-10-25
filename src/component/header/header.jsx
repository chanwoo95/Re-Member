import react from "react";
import styles from "./header.module.css";

function Header() {
  const onLogout = () => false;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>re.member</h1>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
