export const repo = `
query Repository($owner: String!, $name: String!)  {
        repository (owner: $owner, name: $name){
        createdAt
        id
        name
        description
            defaultBranchRef {
          name
        }
                    object(expression: "master:") {
                    ... on Tree {
                        entries {
                            name
                        }
                    }
                }
      }
}`;
