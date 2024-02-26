import { Select } from "components";
import { ContentBox } from "layout";
import React from "react";

export const SelectPage = () => {
  return (
    <div id="select-page">
      <h4>Select</h4>
      <p>설명</p>
      <ContentBox>
        <Select>
          <Select.Summay placeholder="선택" />
          <Select.Option>
            <Select.Item title="강" value={0} />
            <Select.Item title="덕" value={1} />
          </Select.Option>
        </Select>
      </ContentBox>
    </div>
  );
};
