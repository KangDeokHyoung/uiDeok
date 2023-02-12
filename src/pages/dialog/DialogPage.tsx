import React from "react";
import { Button, Dialog } from "components";
import { ContentBox } from "layout";
import { T_Dialog } from "type";

export const DialogPage: React.FC<T_Dialog.Props> = (props) => {
  return (
    <div id="button-page">
      <h4>Input</h4>
      <p>설명</p>
      <ContentBox>
        <Dialog content={({ closeHandler }) => <div>팝업창입니다.</div>}>
          <Button>dialogg</Button>
        </Dialog>
      </ContentBox>
    </div>
  );
};
