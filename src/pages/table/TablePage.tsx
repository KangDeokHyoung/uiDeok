import React from "react";
import { ContentBox } from "layout";
import { Table } from "components";

export const TablePage = () => {
  return (
    <div id="radio-page">
      <h4>Table</h4>
      <p>설명</p>
      <ContentBox>
        <Table />
      </ContentBox>
    </div>
  );
};
