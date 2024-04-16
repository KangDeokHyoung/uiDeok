export default `
import React, { useState } from "react";
import { ContentBox } from "layout";
import { Box, FlexBox } from "common";
import { Radio } from "components";

export const RadioPage = () => {
  const [value, setValue] = useState("female");

  return (
    <div id="radio-page">
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

`;
