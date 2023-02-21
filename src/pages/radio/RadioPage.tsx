import React from "react";
import { ContentBox } from "layout";
import { FlexBox } from "common";
import { Radio } from "components";

export const RadioPage = () => {
  return (
    <div id="radio-page">
      <h4>Check box</h4>
      <p>설명</p>
      <ContentBox>
        <FlexBox st={{ gap: 20 }}>
          <Radio />
        </FlexBox>
      </ContentBox>
    </div>
  );
};
