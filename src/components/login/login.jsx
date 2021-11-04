import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "../login/login.module.css";

function Login({ authService }) {
  const history = useHistory();

  const goToMain = (userId) => {
    history.push({
      pathname: "/main",
    });
    console.log(userId);
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToMain(data));
  };

  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.section}>
        <button className={styles.button} onClick={onLogin}>
          Google
        </button>
        <button className={styles.button} onClick={onLogin}>
          Github
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
