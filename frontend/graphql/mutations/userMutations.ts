import gql from 'graphql-tag'

export const USER_CREATE = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email) {
      id
      firstName
      lastName
      email
    }
  }
`

export const USER_UPDATE = gql`
  mutation UpdateUser(
    $id: Int!
    $firstName: String
    $lastName: String
    $email: String
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      __typename
      ... on User {
        id
        firstName
        lastName
        email
      }
      __typename
      ... on Error {
        error
      }
    }
  }
`

export const USER_DELETE = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      __typename
      ... on User {
        firstName
        lastName
        email
      }
      __typename
      ... on Error {
        error
      }
    }
  }
`
