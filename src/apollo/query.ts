import gql from "graphql-tag";

export const GET_USER_INFO = gql`
query repoInfo($login: String = "hinagawa") {
    user(login: $login) {
    login
    avatarUrl
    
}
}
`;
