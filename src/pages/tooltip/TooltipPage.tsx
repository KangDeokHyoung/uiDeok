import { CodeMirrorContext } from "common";
import { Button, Tooltip } from "components";
import { ContentBox } from "layout";
import React from "react";
import source from "./source";

export const TooltipPage = () => {
  return (
    <div id="tooltip-page">
      <h4>Tooltip</h4>
      <ContentBox>
        <Tooltip content={() => <div>tooltip</div>}>
          <Button>tooltip</Button>
        </Tooltip>
      </ContentBox>
      <CodeMirrorContext source={source} title="Tooltip" />
    </div>
  );
};
