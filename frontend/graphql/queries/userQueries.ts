import gql from 'graphql-tag'

export const USERS_QUERY = gql`
  query AllUsers {
    users {
      id
      firstName
      lastName
      email
      donations {
        amount
        tip
      }
    }
  }
`

export const USERS_QUERY_SELECT_INPUT = gql`
  query AllUsersSelectInput {
    users {
      id
      firstName
      lastName
    }
  }
`

export const USER_QUERY = gql`
  query OneUser($id: Int!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
    }
  }
`
