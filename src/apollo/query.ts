export const query = `
  query repoInfo($login: String = "hinagawa") {
    user(login: $login) {
      login
      avatarUrl
    }
  }
`;
