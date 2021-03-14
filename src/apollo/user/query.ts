export const profileInfo = `
query repoInfo($login: String!) {
    user(login: $login) {
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
