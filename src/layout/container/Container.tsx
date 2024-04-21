import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { GrReactjs } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import { Button } from "components";
import { useDispatch, useSelector } from "common/hooks/selector";
import "./Container.scss";
import { reSizeActions } from "store/actions/mypage";

export const Container = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const { viewType } = useSelector((state) => state.resize);

  const menuHandler = () => {
    dispatch(reSizeActions.setViewType(true));
  };

  return (
    <div id="container">
      <div className="primary">
        {!viewType ? (
          <>
            <div className="logo">
              <GrReactjs className="logo-icon" />
              <h4>UI DEOK9</h4>
            </div>
            <Button onClick={menuHandler}>
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
