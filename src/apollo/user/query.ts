export const profileInfo = `
query repoInfo($login: String!) {
    user(login: $login) {
    name
    login,
    avatarUrl
    followers{
      totalCount
    }
    following{
      totalCount
    }
    
}
}`;

export const searchUsers = `
query searchUsers($query: String!, $count: Int!) {
search(query: $query, type:USER, last: $count){
  userCount
  nodes {
    ... on User {
    name,
    login,
    avatarUrl,
    
    }
    }
}
}`;

export const searchUserCount = `
query searchUsers($query: String!) {
search(query: $query, type:USER){
userCount
}
}`;
