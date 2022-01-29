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
