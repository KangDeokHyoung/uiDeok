import React, { useState } from "react";
import { ContentBox } from "layout";
import { Box, CodeMirrorContext, FlexBox } from "common";
import { Radio } from "components";
import source from "./source";

export const RadioPage = () => {
  const [value, setValue] = useState("female");

  return (
    <div id="radio-page">
      <h4>Radio</h4>
      <ContentBox>
        <FlexBox st={{ gap: 20 }}>
          <Radio.Group
            value={value}
            onChange={(item) => {
              setValue(item as string);
            }}
          >
            <Radio title="female" value="female" />
            <Radio title="male" value="male" />
            <Radio title="other" value="other" />
          </Radio.Group>
        </FlexBox>
        <Box>
          <>{value}</>
        </Box>
      </ContentBox>
      <CodeMirrorContext source={source} title="Radio" />
    </div>
  );
};
