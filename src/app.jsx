import react from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./component/login/login";
import styles from "../src/app.module.css";
import MainHome from "./component/mainhome/mainhome";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/main">
            <MainHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
