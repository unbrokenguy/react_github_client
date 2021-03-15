import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import SearchRepositoriesList from "../search-repo-list";
import { searchRepositoriesCount } from "../../apollo/repositories/repositories";
import RingLoader from "react-spinners/RingLoader";

const newQuery = gql(searchRepositoriesCount);

function SearchRepo() {
  const [value, setValue] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const { data, loading } = useQuery(newQuery, {
    variables: {
      query: value,
    },
  });

  function handleData(e) {
    if (e.key === "Enter") {
      setIsPressed(true);
    }
  }

  return (
    <div>
      <input
        className="input-group"
        type="text"
        placeholder="search repository.."
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={handleData}
      />
      {isPressed ? (
        <div>
          {loading ? (
            <div className="loader-position">
              <RingLoader size={150} />
            </div>
          ) : (
            <SearchRepositoriesList
              query={value}
              count={data.search.repositoryCount}
            />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SearchRepo;
