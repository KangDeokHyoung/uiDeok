export default `import React from "react";
import { Accordion, Button } from "components";
import { ContentBox } from "layout";

export const AccordionPage = () => {
  return (
    <div id="Accordion-page">
      <ContentBox st={{ backgroundColor: "rgb(231, 235, 240)", alignItems: "baseline" }}>
        <Accordio>
          <Accordion.Summary>
            <div>Accordion</div>
          </Accordion.Summary>
          <Accordion.Collapse>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion.Collapse>
        </Accordio
        <Accordion>
          <Accordion.Summary>
            <div>Accordion Actions</div>
          </Accordion.Summary>
          <Accordion.Collapse>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            <FlexBox st={{ marginTop: 20, justifyContent: "flex-end", gap: 10 }}>
              <Button>CANCEL</Button>
              <Button>AGREE</Button>
            </FlexBox>
          </Accordion.Collapse>
        </Accordion>
      </ContentBox>
    </div>
  );
};

`;
