import React, { useState } from "react";
import gql from "graphql-tag";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../header";
import RingLoader from "react-spinners/RingLoader";
import { ListTypeNode, ListValueNode } from "graphql";
import { UserNode } from "../types";
import { Link } from "react-router-dom";
import Buttons from "../buttons";

type Props = {
  nodes: UserNode[];
  count: number;
};

const ListUsers = (props: Props) => {
  const { nodes } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [nodesPerPage] = useState(5);

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
            <Link to={`/profile/${node.name}`}>{node.name}</Link>
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

export default ListUsers;
