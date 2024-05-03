import React from "react";
import { useDispatch, useSelector } from "common/hooks/selector";
import { Button } from "components";
import Navigator from "pages/navigator/Navigator";
import { GrReactjs } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { reSizeActions } from "store/actions/mypage";

export const Menu = () => {
  const dispatch = useDispatch();
  const { isMobile, mobileMenuToggle } = useSelector((state) => state.resize);
  const navigate = useNavigate();

  const closeHandler = () => {
    dispatch(reSizeActions.setMobileToggle(false));
  };

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <div className="side-menu">
      <div className="logo" onClick={onClickHandler}>
        <GrReactjs className="logo-icon" />
        <h4>UI DEOK9</h4>
      </div>
      {isMobile && (
        <div className="menu_close">
          <Button onClick={closeHandler}>
            <IoMdClose />
          </Button>
        </div>
      )}
      <Navigator />
    </div>
  );
};
