import React from "react";
import gql from "graphql-tag";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import RingLoader from "react-spinners/RingLoader";
import ListUsers from "../user-info";
import { searchRepositories } from "../../apollo/repositories/repositories";

type Props = {
  query: string;
  count: number;
};

const newQuery = gql(searchRepositories);

const SearchUsersList = (props: Props) => {
  const { query } = props;
  let { count } = props;

  if (count > 100) {
    count = 100;
  }

  console.log(query, count);

  const { data, loading } = useQuery(newQuery, {
    variables: {
      query: query,
      count: count,
    },
  });

  const filteredNodes = data?.search.nodes.filter((node) => {
    return node.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      {loading ? (
        <RingLoader size={150} />
      ) : (
        <div>
          {count !== 0 ? (
            <ListUsers nodes={filteredNodes} count={count} />
          ) : (
            <h1>No results</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchUsersList;
