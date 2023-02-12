import React from "react";
import { Input } from "components";
import { ContentBox } from "layout";

export const InputPage = () => {
  return (
    <div id="button-page">
      <h4>Input</h4>
      <p>설명</p>
      <ContentBox>
        <div>
          <Input label="placeholder" placeholder="placeholder" />
          <Input type="password" placeholder="password" value="12341234" />
          <Input error />
        </div>
      </ContentBox>
    </div>
  );
};
