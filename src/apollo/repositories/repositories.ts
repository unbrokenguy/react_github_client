export const repositories = `
query Repositories($owner: String!, $count: Integer!)  {
    user(login: $owner){
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
        repositories{
            totalCount
        }
      }
}`;
