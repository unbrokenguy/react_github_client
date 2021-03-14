export const profileInfo = `
query repoInfo($login: String = "hinagawa") {
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
