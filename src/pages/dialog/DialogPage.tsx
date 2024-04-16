import React from "react";
import { Button, Dialog } from "components";
import { ContentBox } from "layout";
import { T_Dialog } from "type";
import { CodeMirrorContext } from "common";
import source from "./source";

export const DialogPage: React.FC<T_Dialog.Props> = (props) => {
  return (
    <div id="dialog-page">
      <h4>Dialog</h4>
      <p>
        이 컴포넌트는 백그라운드 컴포넌트 앞에 자식 노드를 렌더링합니다. 모달은 중요한 기능을 제공합니다: 한 번에
        하나씩만으로는 충분하지 않은 경우 모달 스태킹을 관리합니다. 모달 아래에서 상호작용을 비활성화하기 위해 배경을
        생성합니다.열려 있는 동안 페이지 콘텐츠의 스크롤을 비활성화합니다.모달 콘텐츠로 이동하고 모달이 닫힐 때까지
        포커스를 유지하여 포커스를 적절하게 관리합니다.적절한 ARIA 역할을 자동으로 추가합니다.
      </p>
      <ContentBox>
        <Dialog
          content={({ closeHandler }) => (
            <Dialog.Base>
              <Dialog.Content>안녕하세요 팝업창입니다.</Dialog.Content>
            </Dialog.Base>
          )}
        >
          <Button>dialogg</Button>
        </Dialog>
      </ContentBox>
      <CodeMirrorContext source={source} title="Dialog" />
    </div>
  );
};
