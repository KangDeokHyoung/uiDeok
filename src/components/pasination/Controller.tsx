import classNames from "classnames";
import { AllArrow, Arrow } from "common/icons/Icons";
import { Button } from "components/button/Button";
import React from "react";
import { N_Pagination } from "type/pagination";

type Props = {
  children: JSX.Element;
  data: N_Pagination.Data;
  onChange: (data: N_Pagination.Data) => void;
  doubleArrowIcon?: JSX.Element;
  arrowIcon?: JSX.Element;
};

const Controller = (props: Props) => {
  const { children, data, onChange } = props;
  const { format, info } = data;
  const { limit, offset } = format;
  const { totalPage } = info;

  const prevDisabled = offset <= 0;
  const nextDisabled = offset / limit + 1 === totalPage;

  const prevHandler = (num: number) => {
    onChange({
      info: { ...data.info, current: num / limit + 1 },
      format: { ...data.format, offset: num },
    });
  };

  const child = React.cloneElement(children, { data, onChange });

  return (
    <div className="row">
      <div className="left-arrow">
        <Button onClick={() => prevHandler(0)} disabled={prevDisabled}>
          <AllArrow />
        </Button>
        <Button onClick={() => prevHandler(offset - limit)} disabled={prevDisabled}>
          <Arrow />
        </Button>
      </div>
      <div className="center">{child}</div>
      <div className="right-arrow">
        <Button onClick={() => prevHandler(offset + limit)} disabled={nextDisabled}>
          <Arrow className="rotate" />
        </Button>
        <Button onClick={() => prevHandler(totalPage * limit - limit)} disabled={nextDisabled}>
          <AllArrow className="rotate" />
        </Button>
      </div>
    </div>
  );
};

export default Controller;
