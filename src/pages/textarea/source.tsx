export default `
import { ContentBox } from "layout";
import React, { useState } from "react";
import { Label, TextArea } from "components";
import { Box } from "common";

export const TextAreaPage = () => {
  const [value, setValue] = useState("textarea");

  return (
    <div id="textarea-page">
      <ContentBox>
        <Box>
          <>
            <Label text="TextArea" st={{ marginBottom: 10 }} />
            <TextArea value={value} onChange={(value) => setValue(value)} placeholder="placeholder" />
          </>
        </Box>
        <Box>
          <>
            <Label text="Error" st={{ marginBottom: 10 }} />
            <TextArea onChange={(value) => setValue(value)} placeholder="placeholder" error={true} />
          </>
        </Box>

        <Box>
          <>
            <Label text="Disabled" st={{ marginBottom: 10 }} />
            <TextArea onChange={(value) => setValue(value)} placeholder="placeholder" disabled />
          </>
        </Box>
      </ContentBox>
    </div>
  );
};




`;
