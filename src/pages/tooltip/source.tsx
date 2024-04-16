export default `
import { Button, Tooltip } from "components";
import { ContentBox } from "layout";
import React from "react";

export const TooltipPage = () => {
  return (
    <div id="tooltip-page">
      <ContentBox>
        <Tooltip content={() => <div>tooltip</div>}>
          <Button>tooltip</Button>
        </Tooltip>
      </ContentBox>
    </div>
  );
};

`;
