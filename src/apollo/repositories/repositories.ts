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
        owner{
          login
        }
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

export const searchRepositoriesCount = `
query searchRepositories($query: String!) {
search(query: $query, type:REPOSITORY){
repositoryCount
}
}`;

export const searchRepositories = `
query searchRepositories($query: String!, $count: Int!) {
search(query: $query, type:REPOSITORY, first: $count){
repositoryCount
nodes {
  ... on Repository {
    id
    name
    createdAt
    owner {
    login
    }
    }
}
}
}`;
