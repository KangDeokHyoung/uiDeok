import React from "react";
import styled from "styled-components";

const Div = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export function Check<P>(props: P) {
  return (
    <Div {...props}>
      <svg
        {...props}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="1.0em"
        width="1.0em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
      </svg>
    </Div>
  );
}

export function Order<P>(props: P) {
  return (
    <Div {...props}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        fontSize="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
        </g>
      </svg>
    </Div>
  );
}
