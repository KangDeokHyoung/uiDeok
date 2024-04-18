import { ContentBox } from "layout";
import React, { useState } from "react";
import { Label, TextArea } from "components";
import { Box, CodeMirrorContext } from "common";
import source from "./source";

export const TextAreaPage = () => {
  const [value, setValue] = useState("textarea");

  return (
    <div id="textarea-page">
      <h4>TextArea</h4>
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
      <CodeMirrorContext source={source} title="Textarea" />
    </div>
  );
};
