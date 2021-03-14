import React, { useState } from "react";
import "./index.scss";
import { RepoNode } from "../types";
import Buttons from "../repo-info/buttons";

type Props = {
  nodes: RepoNode[];
  count: number;
};

const List = (props: Props) => {
  const { nodes } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [nodesPerPage, setNodesPerPage] = useState(5);

  const indexOfLastNode = currentPage * nodesPerPage;
  const indexOfFirstNode = indexOfLastNode - nodesPerPage;
  const currentNodes = nodes.slice(indexOfFirstNode, indexOfLastNode);

  const username = localStorage.getItem("username");
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  return (
    <div>
      <div className="form-align">
        <input className="form-control" placeholder="Search on page"></input>
      </div>
      {currentNodes.map((node) => (
        <ul key={node.id}>
          <div className="repo-list">
            <li>
              {node.isPrivate + "\n"}
              <h1>{node.name + "\n"}</h1>
              {node.createdAt + "\n"}
            </li>
          </div>
        </ul>
      ))}
      <div className="buttons-align">
        <Buttons
          nodesPerPage={nodesPerPage}
          totalNodes={nodes.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default List;
