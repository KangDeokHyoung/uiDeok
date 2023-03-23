import React, { useContext } from "react";
import { Accordion } from "components";
import { ContentBox } from "layout";
import { AccordionContext } from "components/accordion/Accordion";
// import { Box } from "common";

export const AccordionPage = () => {
  return (
    <div id="Accordion-page">
      <h4>Input</h4>
      <p>설명</p>
      <ContentBox st={{ backgroundColor: "rgb(231, 235, 240)" }}>
        <Accordion>
          <Accordion.Summary />
          <Accordion.Collapse>
            <div></div>
          </Accordion.Collapse>
        </Accordion>
      </ContentBox>
    </div>
  );
};
