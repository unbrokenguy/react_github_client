import { gql } from "apollo-boost";

const GET_REPOSITORY = gql`
  query {
    repository(name: "LinkedIn", owner: "AekoArray") {
      createdAt
      description
    }
  }
`;
export default GET_REPOSITORY;
