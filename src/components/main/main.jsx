import React from "react";
import Home from "../home/home";
import SideNavigation from "../side-navigation/side-navigation";
const Main = () => {
  return (
    <div>
      <div>
        <SideNavigation />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default Main;
