import { Button, Tooltip } from "components";
import { ContentBox } from "layout";
import React from "react";

export const TooltipPage = () => {
  return (
    <div id="radio-page">
      <h4>Tooltip</h4>
      <p>설명</p>
      <ContentBox>
        <Tooltip content={() => <div className="asd">안녕하세요</div>}>
          <Button>tooltip</Button>
        </Tooltip>
      </ContentBox>
    </div>
  );
};
