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
          <Radio.Group>
            <Radio title="1" value={1} />
            <Radio title="2" value={2} />
          </Radio.Group>
        </FlexBox>
      </ContentBox>
    </div>
  );
};
