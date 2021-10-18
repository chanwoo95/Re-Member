import react from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Link to="/">home</Link>
          <Link>test</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
