export declare namespace N_Pagination {
  type Data = {
    info: { current: number; totalPage: number };
    format: { limit: number; offset: number };
  };

  type Props = {
    data?: Data;
    onChange?: (pagination: Data) => void;
    doubleArrowIcon?: JSX.Element;
    arrowIcon?: JSX.Element;
    children?: JSX.Element;
  };
}
