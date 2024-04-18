import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { GrReactjs } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import useWindowSizeCustom from "common/function/function";
import { Button } from "components";
import "./Container.scss";

export const Container = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[2];
  const size = useWindowSizeCustom().width;

  return (
    <div id="container">
      <div className="primary">
        {!!size && size < 768 ? (
          <>
            <div className="logo">
              <GrReactjs className="logo-icon" />
              <h4>UI DEOK9</h4>
            </div>
            <Button>
              <IoMdMenu />
            </Button>
          </>
        ) : (
          <h4>{`${title.toUpperCase()}_`}</h4>
        )}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
