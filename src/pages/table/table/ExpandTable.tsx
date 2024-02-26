import React, { useState } from "react";
import { Accordion, Table } from "components";
import { N_Table } from "type/Table";
import { orderBy } from "lodash";
import "./ExpandTable.scss";

export const ExpandTable = () => {
  const header = [
    { title: "ID", property: "id", align: "center", hidden: false, flex: 1.7, toolTip: true },
    { title: "url", property: "url", align: "center", hidden: false, flex: 1.7, toolTip: true },
    { title: "이름", property: "userName", align: "center", hidden: false, flex: 1.7, toolTip: true },
    { title: "전화번호", property: "phoneNumber", align: "center", hidden: false, flex: 1.7, toolTip: true },
  ];

  const data = [
    { id: "magenda1", url: "www.aagenda1.com", userName: "강덕형1", phoneNumber: "010-1856-0000" },
    { id: "magenda2", url: "www.bgenda2.com", userName: "덕형2", phoneNumber: "010-3856-0000" },
    { id: "magenda3", url: "www.cagenda3.com", userName: "리덕형3", phoneNumber: "010-2856-0000" },
    { id: "magenda4", url: "www.dagenda4.com", userName: "미덕형4", phoneNumber: "010-5856-0000" },
  ];

  return (
    <Table className="expand-table">
      <Table.Head data={header} />
      <Table.Body data={data}>
        {({ index, rowData }) => {
          return (
            <Table.Row key={rowData.id}>
              <Accordion>
                <Accordion.Summary st={{ height: 36, padding: 0 }}>
                  <Table.Tr data={rowData} st={{ height: 36 }} />
                </Accordion.Summary>
                <Accordion.Collapse>
                  Accdodion expand-Accdodion expand-Accdodion expand-Accdodion expand
                </Accordion.Collapse>
              </Accordion>
            </Table.Row>
          );
        }}
      </Table.Body>
    </Table>
  );
};
