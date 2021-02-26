import { gql } from "apollo-boost";

export const query = `
query repoInfo($login: String = "hinagawa") {
    user(login: $login) {
    name,
    login,
    avatarUrl
    
}
}`;
