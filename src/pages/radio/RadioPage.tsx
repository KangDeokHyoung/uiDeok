import React from "react";
import { ContentBox } from "layout";
import { CodeMirrorContext, FlexBox } from "common";
import { Radio } from "components";
import source from "./source";

export const RadioPage = () => {
  return (
    <div id="radio-page">
      <h4>Check box</h4>
      <p>설명</p>
      <ContentBox>
        <FlexBox st={{ gap: 20 }}>
          <Radio.Group onChange={(item) => console.log(item)}>
            <Radio title="female" value={1} />
            <Radio title="male" value={2} />
            <Radio title="other" value={3} />
          </Radio.Group>
        </FlexBox>
      </ContentBox>
      <CodeMirrorContext source={source} title="Radio" />
    </div>
  );
};
