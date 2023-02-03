import React from "react";
import { Input } from "components";
import { ContentBox } from "layout";

type Props = {};

export const InputPage: React.FC<Props> = (props) => {
  const { ...rest } = props;
  return (
    <div id="button-page">
      <h4>Input</h4>
      <p>설명</p>
      <ContentBox>
        <Input {...rest} />
        <Input {...rest} />
      </ContentBox>
    </div>
  );
};
