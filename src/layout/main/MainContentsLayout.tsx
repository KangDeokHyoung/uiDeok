import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { GrReactjs } from "react-icons/gr";
import Navigator from "pages/navigator/Navigator";
import Toast from "components/toast/Toast";
import useWindowSizeCustom from "common/function/function";
import "./MainContentsLayout.scss";
import { reSizeActions } from "store/actions/mypage";
import { useDispatch, useSelector } from "common/hooks/selector";
import { IoMdClose } from "react-icons/io";
import { Button } from "components";

export function MainContentsLayout() {
  const size = useWindowSizeCustom().width;
  const dispatch = useDispatch();
  const { viewType } = useSelector((state) => state.resize);

  useEffect(() => {
    if (size) dispatch(reSizeActions.setData(size));
    dispatch(reSizeActions.viewTypeAcrion());
  }, [dispatch, size]);

  const closeHandler = () => {
    dispatch(reSizeActions.setViewType(false));
  };

  return (
    <Toast.Provider>
      <div id="main">
        {viewType && (
          <div className="side-menu">
            <div className="logo">
              <GrReactjs className="logo-icon" />
              <h4>UI DEOK9</h4>
            </div>
            <div className="menu_close">
              <Button onClick={closeHandler}>
                <IoMdClose />
              </Button>
            </div>
            <Navigator />
          </div>
        )}
        <Outlet />
        <Toast className="copy-toast" />
      </div>
    </Toast.Provider>
  );
}
