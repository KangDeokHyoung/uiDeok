import React from "react";
import { Outlet } from "react-router-dom";
import "./MainContentsLayout.scss";
import { GrReactjs } from "react-icons/gr";
import Navigator from "pages/navigator/Navigator";
import Toast from "components/toast/Toast";

export function MainContentsLayout() {
  return (
    <Toast.Provider>
      <div id="main">
        <div className="side-menu">
          <div className="logo">
            <GrReactjs className="logo-icon" />
            <h4>UI DEOK9</h4>
          </div>
          <Navigator />
        </div>
        <Outlet />
        <Toast className="copy-toast" />
      </div>
    </Toast.Provider>
  );
}
