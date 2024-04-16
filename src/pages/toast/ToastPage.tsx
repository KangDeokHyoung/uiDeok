import React from "react";
import { CodeMirrorContext } from "common";
import { Button, Tooltip } from "components";
import { ContentBox } from "layout";
import source from "./source";

export const ToastPage = () => {
  return (
    <div id="toast-page">
      <h4>Toast</h4>
      <p>설명</p>
      <ContentBox>
        <div></div>
      </ContentBox>
      {/* <CodeMirrorContext source={source} title="Tooltip" /> */}
    </div>
  );
};
