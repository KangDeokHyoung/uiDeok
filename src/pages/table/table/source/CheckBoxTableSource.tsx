export default `
import React, { useState } from "react";
import { Table } from "components";

type Data = {
  id: string;
  url: string;
  userName: string;
  phoneNumber: string;
};

export const CheckBoxTable = () => {
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

  const [selected, setSelected] = useState<Data[]>([]);

  return (
    <Table>
      <Table.Head
        data={header}
        checkbox={{
          indeterminate: selected.length > 0 && selected.length < data.length,
          onChange: (e: any) => {
            const { checked } = e.target;
            setSelected(checked ? data : []);
          },
        }}
      />
      <Table.Body data={data}>
        {({ index, rowData }) => {
          return (
            <Table.Row key={rowData.id}>
              <Table.Tr
                data={rowData}
                checkbox={{
                  checked: !!selected.find((el) => el.id === rowData.id), // all check
                  onChange: (e: any) => {
                    const { checked } = e.target;
                    if (checked) setSelected([...selected, rowData]);
                    else {
                      setSelected(selected.filter((el) => el.id !== rowData.id));
                    }
                  },
                }}
              >
                {({ property, value }) => {
                  if (property === "id") return value;
                  return value ?? "-";
                }}
              </Table.Tr>
            </Table.Row>
          );
        }}
      </Table.Body>
    </Table>
  );
};


`;
