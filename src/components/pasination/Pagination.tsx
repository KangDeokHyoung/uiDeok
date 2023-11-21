import { Button } from "components/button/Button";
import React from "react";
import { N_Pagination } from "type/pagination";

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
      <div className="row">
        <div className="left-arrow">
          <Button>
            <div>{`<<`}</div>
          </Button>
          <Button>
            <div>{`<`}</div>
          </Button>
        </div>
        <div className="center-arrow">1,2,3,4</div>
        <div className="right-arrow">
          <Button>
            <div>{`>`}</div>
          </Button>
          <Button>
            <div>{`>>`}</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
