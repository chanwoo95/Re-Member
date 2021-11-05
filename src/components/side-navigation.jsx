import React from "react";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  <div>
    <header>
      <Link to="/">
        <h2>Re.Member</h2>
      </Link>
    </header>
    <div className="navGroup">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/work">
          <li>Work</li>
        </Link>
      </ul>
    </div>
    <footer>
      <div>state</div>
    </footer>
  </div>;
};

export default SideNavigation;
