import React from "react";
import { Input } from "components";
import { ContentBox } from "layout";

export const InputPage = () => {
  return (
    <div id="button-page">
      <h4>Input</h4>
      <p>설명</p>
      <ContentBox>
        <Input />
        <Input type="password" />
      </ContentBox>
    </div>
  );
};
