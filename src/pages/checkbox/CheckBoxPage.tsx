import React from "react";
import { ContentBox } from "layout";
import { FlexBox } from "common";
import { CheckBox } from "components";

export const CheckBoxPage = () => {
  return (
    <div id="check-box-page">
      <h4>Check box</h4>
      <p>설명</p>
      <ContentBox>
        <FlexBox st={{ gap: 20 }}>
          <CheckBox />
        </FlexBox>
      </ContentBox>
    </div>
  );
};
