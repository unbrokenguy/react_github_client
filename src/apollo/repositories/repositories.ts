export const repositories = `
query ($owner: String!, $count: Int!)  {
    user(login: $owner){
      login
    repositories(last: $count){
      totalCount
      nodes{
        id
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
