import React from "react";
import { ContentBox } from "layout";
import { FlexBox } from "common";
import { Switch } from "components";

export const SwitchPage = () => {
  const [s, ss] = React.useState(0);
  console.log({ s });
  return (
    <div id="switch-page">
      <h4>Switch</h4>
      <p>설명</p>
      <ContentBox>
        <FlexBox st={{ gap: 20 }}>
          <Switch onChange={(item) => ss(item)} value={s} />
        </FlexBox>
      </ContentBox>
    </div>
  );
};
