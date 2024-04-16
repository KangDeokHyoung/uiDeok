export default `
import { Select } from "components";
import { ContentBox } from "layout";
import React from "react";

export const SelectPage = () => {
  return (
    <div id="select-page">
      <ContentBox>
        <Select>
          <Select.Summay />
          <Select.Option>
            <Select.Item title="apple" value={0} />
            <Select.Item title="banana" value={1} />
          </Select.Option>
        </Select>
      </ContentBox>
    </div>
  );
};



`;
