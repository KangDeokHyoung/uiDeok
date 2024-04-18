import React, { useState } from "react";
import { ContentBox } from "layout";
import { Box, CodeMirrorContext, FlexBox } from "common";
import { Switch } from "components";
import source from "./source";

export const SwitchPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="switch-page">
      <h4>Switch</h4>
      <ContentBox>
        <Box st={{ width: 100 }}>
          <>{open ? "ON" : "OFF"}</>
        </Box>
        <FlexBox st={{ gap: 20 }}>
          <Switch checked={open} onChange={(item) => setOpen(item.target.checked)} />
        </FlexBox>
      </ContentBox>
      <CodeMirrorContext source={source} title="Switch" />
    </div>
  );
};
