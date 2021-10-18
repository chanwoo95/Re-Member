import react from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./component/login/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>
            <Login />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
