import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./Container.scss";

export const Container = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[2];

  return (
    <div id="container">
      <div className="primary">
        <h4>{`${title.toUpperCase()}_`}</h4>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
