export default `
import React from "react";
import { Button } from "components";
import { FlexBox } from "common";
import { ContentBox } from "layout";

export const ButtonPage = () => {
  return (
    <div id="button-page">
      <ContentBox>
        <FlexBox st={{ gap: 20 }}>
          <Button loading />
          <Button disabled />
          <Button st={{ backgroundColor: "transparent", border: "1px solid red", color: "red" }}>버튼</Button>
          <Button st={{ backgroundColor: "#e71818", width: 200 }} />
        </FlexBox>
      </ContentBox>
    </div>
  );
};

`;
