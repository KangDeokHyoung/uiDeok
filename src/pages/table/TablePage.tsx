import React from "react";
import { ContentBox } from "layout";
import { Label } from "components";
import { Box } from "common";
import { FirstTable } from "./table/FirstTable";
import { SecondTable } from "./table/SecondTable";
import { ThirddTable } from "./table/ThirdTable";

export const TablePage = () => {
  return (
    <div id="table-page">
      <h4>Table</h4>
      <p>설명</p>
      <ContentBox st={{ flexDirection: "column" }}>
        <Box st={{ flex: 1, width: "100%" }}>
          <Label st={{ marginBottom: 10 }} text="basic" />
          <Box st={{ backgroundColor: "rgb(243, 246, 249", flex: 1, padding: 20, borderRadius: 8 }}>
            <FirstTable />
          </Box>
        </Box>
        <Box st={{ flex: 1, width: "100%" }}>
          <Label st={{ marginBottom: 10 }} text="order" />
          <Box st={{ backgroundColor: "rgb(243, 246, 249", flex: 1, padding: 20, borderRadius: 8 }}>
            <SecondTable />
          </Box>
        </Box>
        <Box st={{ flex: 1, width: "100%" }}>
          <Label st={{ marginBottom: 10 }} text="pasination" />
          <Box st={{ backgroundColor: "rgb(243, 246, 249", flex: 1, padding: 20, borderRadius: 8 }}>
            <ThirddTable />
          </Box>
        </Box>
      </ContentBox>
    </div>
  );
};
