import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import styles from "../src/app.module.css";
import Main from "./components/main/main";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
