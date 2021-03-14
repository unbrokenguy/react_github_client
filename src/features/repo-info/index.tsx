import React, { useState } from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../header";
import RingLoader from "react-spinners/RingLoader";
import { ListTypeNode, ListValueNode } from "graphql";
import { RepoNode } from "../types";
import { Link } from "react-router-dom";
import Buttons from "./buttons";

type Props = {
  nodes: RepoNode[];
  count: number;
};

const List = (props: Props) => {
  const { nodes, count } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [nodesPerPage] = useState(5);

  if (count > 5) {
    nodes.slice(0, 5);
  }

  const indexOfLastNode = currentPage * nodesPerPage;
  const indexOfFirstNode = indexOfLastNode - nodesPerPage;
  const currentNodes = nodes.slice(indexOfFirstNode, indexOfLastNode);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div>
      {currentNodes.map((node) => (
        <ul key={node.id}>
          <li>
            <Link to={`/repository/${node.owner.login}/${node.name}`}>
              {node.name}
            </Link>
            and {node.createdAt}
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
