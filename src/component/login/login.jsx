import styles from "../login/login.module.css";

function Login() {
  return (
    <div>
      <header>
        <div>logo img</div> {/* 로고 이미지 추가요망 */}
      </header>
      <section className={styles.section}>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="패스워드" />
      </section>
      <button className={styles.button}>Login</button>
      <footer>2021. re-member</footer>
    </div>
  );
}

export default Login;
