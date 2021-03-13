import { Method } from "@testing-library/dom";
import React from "react";

type Props = {
  nodesPerPage: number;
  totalNodes: number;
  paginate: any;
};

const Buttons = (props: Props) => {
  const { nodesPerPage, totalNodes, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNodes / nodesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="#" onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buttons;
