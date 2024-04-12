export default `
import React from "react";
import { Input } from "components";
import { ContentBox } from "layout";
import { Box } from "common";

export const InputPage = () => {
  return (
    <div id="button-page">
      <ContentBox>
        <div>
          <Box st={{ marginBottom: 30 }}>
            <Input label="placeholder" placeholder="placeholder" />
          </Box>
          <Box st={{ marginBottom: 30 }}>
            <Input label="password" type="password" placeholder="password" value="12341234" />
          </Box>
          <Box st={{ marginBottom: 30 }}>
            <Input label="error" error />
          </Box>
          <Box st={{ marginBottom: 30 }}>
            <Input label="disabled" disabled />
          </Box>
        </div>
      </ContentBox>
    </div>
  );
};

`;
