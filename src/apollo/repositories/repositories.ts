export const repositories = `
query ($owner: String!, $count: Int!)  {
    user(login: $owner){
      login
    repositories(first: $count){
      nodes{
        name
        createdAt
      }
    }
  }
}`;

export const repositoriesCount = `
query RepositoriesCount($owner: String!)  {
        user(login: $owner){
        login
        repositories{
            totalCount
        }
      }
}`;
