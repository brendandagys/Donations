import gql from 'graphql-tag'

export const USERS_QUERY = gql`
  query AllUsers {
    users {
      id
      firstName
      lastName
      email
    }
  }
`

export const USER_QUERY = gql`
  query OneUser($id: Int!) {
    user(id: $id) {
      firstName
      lastName
      email
    }
  }
`
