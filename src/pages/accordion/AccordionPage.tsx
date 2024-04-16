import React from "react";
import { Accordion, Button } from "components";
import { ContentBox } from "layout";
import { CodeMirrorContext, FlexBox } from "common";
import source from "./source";

export const AccordionPage = () => {
  return (
    <div id="Accordion-page">
      <p>Accordion 구성요소에는 다양한 사용 사례를 처리하기 위한 여러 보완 유틸리티 구성요소가 포함되어 있습니다.</p>
      <p>Accordion Actions: 버튼 세트를 그룹화하는 선택적 래퍼입니다.</p>
      <ContentBox
        st={{ backgroundColor: "rgb(231, 235, 240)", alignItems: "baseline", flexDirection: "column", gap: 1 }}
      >
        <Accordion>
          <Accordion.Summary>
            <div>Accordion</div>
          </Accordion.Summary>
          <Accordion.Collapse>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
          </Accordion.Collapse>
        </Accordion>
        <Accordion>
          <Accordion.Summary>
            <div>Accordion Actions</div>
          </Accordion.Summary>
          <Accordion.Collapse>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </div>
            <FlexBox st={{ marginTop: 20, justifyContent: "flex-end", gap: 10 }}>
              <Button>CANCEL</Button>
              <Button>AGREE</Button>
            </FlexBox>
          </Accordion.Collapse>
        </Accordion>
        <Accordion disabled>
          <Accordion.Summary>
            <div>Accordion Disabled</div>
          </Accordion.Summary>
          <Accordion.Collapse>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Accordion.Collapse>
        </Accordion>
      </ContentBox>
      <CodeMirrorContext source={source} title="Accordion" />
    </div>
  );
};
