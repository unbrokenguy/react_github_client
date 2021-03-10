import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../header";
import RingLoader from "react-spinners/RingLoader";
import { ListTypeNode, ListValueNode } from "graphql";
import { RepoNode } from "../types";
import { Link } from "react-router-dom";

type Props = {
  nodes: RepoNode[];
  count: number;
};

const List = (props: Props) => {
  const { nodes } = props;

  return (
    <div>
      {nodes.map((node) => (
        <ul key={node.id}>
          <li>
            <Link to={`/repository/${node.owner.login}/${node.name}`}>
              {node.name}
            </Link>
            and {node.createdAt}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default List;
