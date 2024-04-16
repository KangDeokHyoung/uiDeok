import React, { useState } from "react";
import { Box, CodeMirrorContext } from "common";
import { Label, Select } from "components";
import { ContentBox } from "layout";
import source from "./source";
import { N_Select } from "type/select";

export const SelectPage = () => {
  const [selected, setSelected] = useState<N_Select.Selected<number>>({ title: "apple", value: 0 });

  return (
    <div id="select-page">
      <h4>Select</h4>
      <p>설명</p>
      <Box st={{ marginTop: 30 }}>
        <Label text="Single" />
        <ContentBox st={{ marginTop: 0, flexWrap: "wrap", justifyItems: "flex-start" }}>
          <Box>
            <Label text="Basic" st={{ marginBottom: 5 }} />
            <Select>
              <Select.Summay />
              <Select.Option>
                <Select.Item title="apple" value={0} />
                <Select.Item title="banana" value={1} />
              </Select.Option>
            </Select>
          </Box>
          <Box>
            <Label text="scroll top" st={{ marginBottom: 5 }} />
            <Select>
              <Select.Summay placeholder="선택" />
              <Select.Option>
                <Select.Item title="apple" value={0} />
                <Select.Item title="banana" value={1} />
                <Select.Item title="carrot" value={3} />
                <Select.Item title="grape" value={4} />
                <Select.Item title="peach" value={5} />
                <Select.Item title="harry kane" value={6} />
                <Select.Item title="oliver hansen" value={7} />
                <Select.Item title="van herry" value={8} />
              </Select.Option>
            </Select>
          </Box>
          <Box>
            <Label text="Default" st={{ marginBottom: 5 }} />
            <Select selected={selected} onChange={(select) => setSelected(select)}>
              <Select.Summay />
              <Select.Option>
                <Select.Item title="apple" value={0} />
                <Select.Item title="banana" value={1} />
              </Select.Option>
            </Select>
          </Box>
          <Box>
            <Label text="Placeholder" st={{ marginBottom: 5 }} />
            <Select>
              <Select.Summay placeholder="placeholder" />
              <Select.Option>
                <Select.Item title="apple" value={0} />
                <Select.Item title="banana" value={1} />
              </Select.Option>
            </Select>
          </Box>
          <Box>
            <Label text="Disabled" st={{ marginBottom: 5 }} />
            <Select disabled>
              <Select.Summay placeholder="disabled" />
              <Select.Option>
                <Select.Item title="apple" value={0} />
                <Select.Item title="banana" value={1} />
              </Select.Option>
            </Select>
          </Box>
          <Box>
            <Label text="Item disabled" st={{ marginBottom: 5 }} />
            <Select>
              <Select.Summay placeholder="disabled" />
              <Select.Option>
                <Select.Item title="apple" value={0} disabled />
                <Select.Item title="banana" value={1} />
              </Select.Option>
            </Select>
          </Box>
        </ContentBox>
        <CodeMirrorContext source={source} title="Select" />
      </Box>
    </div>
  );
};
