export default `
import React, { useState } from "react";
import { ContentBox } from "layout";
import { FlexBox } from "common";
import { CheckBox } from "components";

export const CheckBoxPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div id="check-box-page">
      <h4>Check box</h4>
      <p>설명</p>
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
    </div>
  );
};


`;
