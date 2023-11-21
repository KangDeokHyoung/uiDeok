import React, { useState } from "react";
import { Table } from "components";
import { N_Table } from "type/Table";
import { orderBy } from "lodash";
import Pagination from "components/pasination/Pagination";

export const ThirddTable = () => {
  const header = [
    { title: "ID", property: "id", align: "center", hidden: false, flex: 1.7, toolTip: true, order: true },
    { title: "url", property: "url", align: "center", hidden: false, flex: 1.7, toolTip: true, order: true },
    { title: "이름", property: "userName", align: "center", hidden: false, flex: 1.7, toolTip: true, order: true },
    {
      title: "전화번호",
      property: "phoneNumber",
      align: "center",
      hidden: false,
      flex: 1.7,
      toolTip: true,
      order: true,
    },
  ];

  const data = [
    { id: "magenda1", url: "www.aagenda1.com", userName: "강덕형1", phoneNumber: "010-1856-0000" },
    { id: "magenda2", url: "www.bgenda2.com", userName: "덕형2", phoneNumber: "010-3856-0000" },
    { id: "magenda3", url: "www.cagenda3.com", userName: "리덕형3", phoneNumber: "010-2856-0000" },
    { id: "magenda4", url: "www.dagenda4.com", userName: "미덕형4", phoneNumber: "010-5856-0000" },
    { id: "magenda4", url: "www.dagenda4.com", userName: "미덕형4", phoneNumber: "010-5856-0000" },
    { id: "magenda4", url: "www.dagenda4.com", userName: "미덕형4", phoneNumber: "010-5856-0000" },
    { id: "magenda4", url: "www.dagenda4.com", userName: "미덕형4", phoneNumber: "010-5856-0000" },
    { id: "magenda4", url: "www.dagenda4.com", userName: "미덕형4", phoneNumber: "010-5856-0000" },
    { id: "magenda4", url: "www.dagenda4.com", userName: "미덕형4", phoneNumber: "010-5856-0000" },
    { id: "magenda4", url: "www.dagenda4.com", userName: "미덕형4", phoneNumber: "010-5856-0000" },
  ];

  const [dataList, setDataList] = useState(data);
  const [sort, setSort] = useState<N_Table.Sort>({ id: "asc" });

  const sortHandler = (sort: N_Table.Sort) => {
    const [key, value] = Object.entries(sort)[0];
    setDataList(orderBy(dataList, key, value));
    setSort(sort);
  };

  return (
    <Table order={{ sort, onChange: sortHandler }}>
      <Table.Head data={header} />
      <Table.Body data={dataList}>
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
      <Pagination />
    </Table>
  );
};
