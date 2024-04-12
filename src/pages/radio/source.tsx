export default `
import React from "react";
import { ContentBox } from "layout";
import { FlexBox } from "common";
import { Radio } from "components";

export const RadioPage = () => {
  return (
    <div id="radio-page">
      <ContentBox>
        <FlexBox st={{ gap: 20 }}>
          <Radio.Group onChange={(item) => console.log(item)}>
            <Radio title="female" value={1} />
            <Radio title="male" value={2} />
            <Radio title="other" value={3} />
          </Radio.Group>
        </FlexBox>
      </ContentBox>
    </div>
  );
};


`;
