import React from "react";
import { ContentBox } from "layout";
import { FlexBox } from "common";
import { Switch } from "components";

export const SwitchPage = () => {
  return (
    <div id="switch-page">
      <h4>Switch</h4>
      <p>설명</p>
      <ContentBox>
        <FlexBox st={{ gap: 20 }}>
          <Switch />
        </FlexBox>
      </ContentBox>
    </div>
  );
};
