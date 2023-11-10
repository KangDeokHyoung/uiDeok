import React, { useState } from "react";
import { Button, Dialog, Radio } from "components";
import { ContentBox } from "layout";
import { Popover } from "components";
import { Box, FlexBox } from "common";
import "./PopoverPage.scss";

type Position =
  | "top left"
  | "top center"
  | "top right"
  | "bottom left"
  | "bottom center"
  | "bottom right"
  | "left top"
  | "left center"
  | "left bottom"
  | "right top"
  | "right center"
  | "right bottom";

export const PopoverPage = () => {
  const [position, setPosition] = useState<Position>("bottom center");
  return (
    <div id="popover-page">
      <h4>Popover</h4>
      <p>설명</p>
      <ContentBox>
        <div>
          <FlexBox st={{ gap: 30 }}>
            <Popover clickOutSide clickInSide={false} content={({ closeHandler }) => <div>click out side</div>}>
              <Button>click out side</Button>
            </Popover>
            <Popover clickInSide clickOutSide={false} content={({ closeHandler }) => <div>click in side</div>}>
              <Button>click in side</Button>
            </Popover>
            <Popover clickInSide content={({ closeHandler }) => <div>click out side and click in side</div>}>
              <Button>click out side and click in side</Button>
            </Popover>
            <Popover disabled content={({ closeHandler }) => <></>}>
              <Button>disabled</Button>
            </Popover>

            <Popover
              content={({ closeHandler }) => (
                <Dialog content={({ closeHandler }) => <div>dialog</div>}>
                  <Button>Dialog</Button>
                </Dialog>
              )}
            >
              <Button>dialog</Button>
            </Popover>
          </FlexBox>
          <Box st={{ marginTop: 30 }}>
            <>
              <div className="popover-radio-box">
                <Radio.Group onChange={(value) => setPosition(value as Position)}>
                  <Radio title="top left" value="top left" />
                  <Radio title="top center" value="top center" />
                  <Radio title="top right" value="top right" />
                  <Radio title="bottom left" value="bottom left" />
                  <Radio title="bottom center" value="bottom center" />
                  <Radio title="bottom right" value="bottom right" />
                  <Radio title="left top" value="left top" />
                  <Radio title="left center" value="left center" />
                  <Radio title="left bottom" value="left bottom" />
                  <Radio title="right top" value="right top" />
                  <Radio title="right center" value="right center" />
                  <Radio title="right bottom" value="right bottom" />
                </Radio.Group>
              </div>
              <FlexBox st={{ justifyContent: "center" }}>
                <Popover
                  position={position}
                  clickOutSide
                  clickInSide={false}
                  content={({ closeHandler }) => <div>click out side</div>}
                >
                  <Button st={{ height: 100 }}>click out side</Button>
                </Popover>
              </FlexBox>
            </>
          </Box>
        </div>
      </ContentBox>
    </div>
  );
};
