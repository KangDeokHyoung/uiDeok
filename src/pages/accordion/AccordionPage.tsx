import React from "react";
import { Accordion } from "components";
import { ContentBox } from "layout";

export const AccordionPage = () => {
  return (
    <div id="Accordion-page">
      <h4>Input</h4>
      <p>설명</p>
      <ContentBox st={{ backgroundColor: "rgb(231, 235, 240)" }}>
        <Accordion>
          <Accordion.Summary>
            <div>Accordion.Summary</div>
          </Accordion.Summary>
          <Accordion.Collapse>
            <div>AccordionCollapse</div>
          </Accordion.Collapse>
        </Accordion>
      </ContentBox>
    </div>
  );
};
