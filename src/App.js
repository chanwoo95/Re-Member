import react from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./component/login/login";
import styles from "../src/app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
