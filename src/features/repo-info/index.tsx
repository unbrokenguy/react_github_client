import React from "react";
import "./index.scss";
import { RepoNode } from "../types";

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
          <div className="repo-list">
            <li>
              {node.isPrivate + "\n"}
              <h1>{node.name + "\n"}</h1>
              {node.createdAt + "\n"}
            </li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default List;
