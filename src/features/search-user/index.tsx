import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import SearchUsersList from "../search-user-list";
import { searchUserCount } from "../../apollo/user";
import RingLoader from "react-spinners/RingLoader";

const newQuery = gql(searchUserCount);

function SearchUser() {
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
        placeholder="search user.."
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
            <SearchUsersList query={value} count={data.search.userCount} />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SearchUser;
