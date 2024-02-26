import React from "react";
import { N_Pagination } from "type/pagination";
import Controller from "./Controller";
import Paging from "./Paging";

const Pagination = (props: N_Pagination.Props) => {
  const {
    data = {
      info: { current: 0, totalPage: 0 },
      format: { limit: 0, offset: 0 },
    },
    onChange = () => false,
  } = props;

  return (
    <div id="ui-pagination">
      <Controller data={data} onChange={onChange}>
        <Paging />
      </Controller>
    </div>
  );
};

export default Pagination;
