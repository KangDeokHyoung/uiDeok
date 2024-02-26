import classNames from "classnames";
import React from "react";
import { N_Pagination } from "type/pagination";

interface Props {
  data?: N_Pagination.Data;
  onChange?: (data: N_Pagination.Data) => void;
}

const Paging = (props: Props) => {
  const {
    data = {
      info: { current: 0, totalPage: 0 },
      format: { limit: 0, offset: 0 },
    },
    onChange = () => false,
  } = props;
  const { info, format } = data;
  const { current, totalPage } = info;
  const { limit } = format;

  const pageChapter = Math.floor((current - 1) / 10) * 10;

  const list = Array.from(Array(totalPage), (_, i) => {
    const index = i + 1;
    return index;
  }).slice(pageChapter, pageChapter + 10);

  const onClickHandler = (num: number) => {
    onChange({
      ...data,
      info: { ...info, current: (num / limit) * 10 },
      format: { ...format, offset: num === 1 ? 0 : (num - 1) * limit },
    });
  };

  return (
    <div className="paging-comp">
      {list.map((el, i) => (
        <div key={el} className={classNames({ active: el === current })} onClick={() => onClickHandler(el)}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default Paging;
