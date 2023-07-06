import { gql } from "@apollo/client";

export const GET_REPOS = gql`
{
  user(login: "rohms") {
    id
    login
    avatarUrl
    repositories(first: 25) {
     nodes {
      description
       languages(first: 5) {
            nodes {
              name
            }
          }
      id
      stargazerCount
      name
      nameWithOwner
      issues {
        totalCount
      }
      owner {
        ... on User {
          bio
          avatarUrl
          email
          name
        }
      }
    }
    }
  }
}
`
