import { useDispatch, useSelector } from "common/hooks/selector";
import { Button } from "components";
import Navigator from "pages/navigator/Navigator";
import React from "react";
import { GrReactjs } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { reSizeActions } from "store/actions/mypage";

export const M_Menu = () => {
  const dispatch = useDispatch();
  const { isMobile, mobileMenuToggle } = useSelector((state) => state.resize);

  const closeHandler = () => {
    dispatch(reSizeActions.setMobileToggle(false));
  };

  return (
    <>
      {mobileMenuToggle && (
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
    </>
  );
};
