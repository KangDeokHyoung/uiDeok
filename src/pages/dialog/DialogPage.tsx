import React from "react";
import { Dialog } from "components";
import { T_Dialog } from "type";

const DialogPage: React.FC<T_Dialog.Props> = (props) => {
  return (
    <Dialog content={({ closeHandler }) => <div>팝업창입니다.</div>}>
      <div>버튼</div>
    </Dialog>
  );
};

export default DialogPage;
