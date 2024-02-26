import React, { useState } from "react";
import { Table } from "components";
import { N_Table } from "type/Table";
import Pagination from "components/pasination/Pagination";

export const PagingTable = () => {
  const header = [
    { title: "ID", property: "id", align: "center", hidden: false, flex: 1.7, toolTip: true },
    { title: "url", property: "url", align: "center", hidden: false, flex: 1.7, toolTip: true },
    { title: "이름", property: "userName", align: "center", hidden: false, flex: 1.7, toolTip: true },
    { title: "전화번호", property: "phoneNumber", align: "center", hidden: false, flex: 1.7, toolTip: true },
  ];

  const initData = Array.from(Array(200), (_, index) => {
    const i = index + 1;
    return { id: `magenda${i}`, url: `www.aagenda${i}.com`, userName: `강덕형${i}`, phoneNumber: `${i}10-1856-0000` };
  });

  const [paging, setPaging] = useState({
    info: { current: 1, totalPage: Math.floor(initData.length / 10) },
    format: { limit: 10, offset: 0 },
  });
  const assingData = [...initData].slice(paging.format.offset, paging.format.offset + paging.format.limit);

  return (
    <Table>
      <Table.Head data={header} />
      <Table.Body data={assingData}>
        {({ index, rowData }) => {
          return (
            <Table.Row key={rowData.id}>
              <Table.Tr data={rowData}>
                {({ property, value }) => {
                  if (property === "id") return value;
                  return value ?? "-";
                }}
              </Table.Tr>
            </Table.Row>
          );
        }}
      </Table.Body>
      <Pagination data={paging} onChange={(data) => setPaging(data)} />
    </Table>
  );
};
