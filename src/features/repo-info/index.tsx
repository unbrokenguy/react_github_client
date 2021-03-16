import React, { useState } from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RepoNode } from "../types";
import { Link } from "react-router-dom";
import Buttons from "../../features/buttons";

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

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  return (
    <div>
      {currentNodes.map((node) => (
        <ul key={node.id}>
          <div className="repo-list"></div>
          <li>
            <Link to={`/repository/${node.owner.login}/${node.name}`}>
              {node.name + "\n"}
            </Link>
            {node.createdAt}
          </li>
        </ul>
      ))}
      <Buttons
        nodesPerPage={nodesPerPage}
        totalNodes={nodes.length}
        paginate={paginate}
      />
    </div>
  );
};

export default List;
