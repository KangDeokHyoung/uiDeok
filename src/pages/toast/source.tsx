export default `
import React from "react";
import { CodeMirrorContext } from "common";
import { Button } from "components";
import { ContentBox } from "layout";
import Toast from "components/toast/Toast";

export const ToastPage = () => {
  const { set } = Toast.Context();

  const onClickHandler = () => {
    set({ text: "toast" });
  };

  return (
    <div id="toast-page">
      <ContentBox>
        <Button onClick={onClickHandler}>Toast</Button>
      </ContentBox>
    </div>
  );
};


`;
