import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSidenav from "../Pages/Shared/LeftSidenav/LeftSidenav";
import RightSidenav from "../Pages/Shared/RightSidenav/RightSidenav";

const Main = () => {
  return (
    // Full Body
    <div>
      {/* //Header */}
      <div>
        <Header></Header>
      </div>
      {/* Main Body */}
      <div>
        <div className="grid grid-cols-6">
          <div>
            <LeftSidenav></LeftSidenav>
          </div>
          {/* Main Changeable Section */}
          <div className=" col-span-3">
            <Outlet></Outlet>
          </div>
          <div className=" col-span-2">
            <RightSidenav></RightSidenav>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
