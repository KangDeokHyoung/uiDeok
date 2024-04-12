export default `
import React from "react";
import { Button, Dialog } from "components";
import { ContentBox } from "layout";
import { T_Dialog } from "type";

export const DialogPage: React.FC<T_Dialog.Props> = (props) => {
  return (
    <div id="button-page">
      <ContentBox>
        <Dialog
          content={({ closeHandler }) => (
            <Dialog.Base>
              <Dialog.Content>안녕하세요 팝업창입니다.</Dialog.Content>
            </Dialog.Base>
          )}
        >
          <Button>dialog</Button>
        </Dialog>
      </ContentBox>
    </div>
  );
};



`;
