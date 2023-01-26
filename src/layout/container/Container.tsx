import * as React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import "./Container.scss";

const Container = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[2];

  return (
    <div id="container">
      <div className="primary">
        <h4>{title}</h4>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
