import React from "react";
import { Button } from "components";
import { CodeMirrorContext, FlexBox } from "common";
import { ContentBox } from "layout";
import source from "./source";

export const ButtonPage = () => {
  return (
    <div id="button-page">
      <h4>Button</h4>
      <ContentBox st={{ gap: 20 }}>
        <Button loading />
        <Button disabled />
        <Button st={{ backgroundColor: "transparent", border: "1px solid red", color: "red" }}>버튼</Button>
        <Button st={{ backgroundColor: "#e71818", width: 200 }} />
      </ContentBox>
      <CodeMirrorContext source={source} title="Button" />
    </div>
  );
};
