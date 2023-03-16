import React from "react";
import { Input } from "components";
import { ContentBox } from "layout";
import { Box } from "common";

export const InputPage = () => {
  return (
    <div id="button-page">
      <h4>Input</h4>
      <p>설명</p>
      <ContentBox>
        <div>
          <Box st={{ marginBottom: 30 }}>
            <Input label="placeholder" placeholder="placeholder" onChange={(e) => e.target.value} />
          </Box>
          <Box st={{ marginBottom: 30 }}>
            <Input
              label="password"
              type="password"
              placeholder="password"
              value="12341234"
              onChange={(e) => e.target.value}
            />
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
