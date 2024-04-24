/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Toast from "components/toast/Toast";
import { Menu } from "./Menu";
import { M_Menu } from "./M_Menu";
import { useSelector } from "common/hooks/selector";
import { useDispatch } from "react-redux";
import { reSizeActions } from "store/actions/mypage";
import useWindowSizeCustom from "common/function/function";
import "./MainContentsLayout.scss";

export function MainContentsLayout() {
  const { isMobile } = useSelector((state) => state.resize);
  const size = useWindowSizeCustom().width;
  const dispatch = useDispatch();

  useEffect(() => {
    if (size) {
      dispatch(reSizeActions.setResize(size));
      if (size < 768) dispatch(reSizeActions.setIsMobile(true));
      else dispatch(reSizeActions.setIsMobile(false));
    }
  }, [size]);

  return (
    <Toast.Provider>
      <div id="main">
        {isMobile ? <M_Menu /> : <Menu />}
        <Outlet />
        <Toast className="copy-toast" />
      </div>
    </Toast.Provider>
  );
}
