import React, { useState } from "react";
import { ContentBox } from "layout";
import { CodeMirrorContext, FlexBox } from "common";
import { CheckBox } from "components";
import source from "./source";

export const CheckBoxPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div id="check-box-page">
      <h4>Checkbox</h4>
      <ContentBox>
        <FlexBox st={{ gap: 20 }}>
          <CheckBox
            label="CheckBox"
            checked={checked}
            onChange={(c) => {
              const check = c.target.checked;
              setChecked(check);
            }}
          />
          <CheckBox label="CheckBox" />
          <CheckBox label="CheckBox" />
        </FlexBox>
        <div>{checked ? "on" : "off"}</div>
      </ContentBox>
      <CodeMirrorContext source={source} title="Checkbox" />
    </div>
  );
};
