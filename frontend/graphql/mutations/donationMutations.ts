import gql from 'graphql-tag'

export const DONATION_CREATE = gql`
  mutation CreateDonation($userId: Int!, $amount: Float!, $tip: Float!) {
    createDonation(userId: $userId, amount: $amount, tip: $tip) {
      id
      user {
        id
      }
      amount
      tip
    }
  }
`

export const DONATION_UPDATE = gql`
  mutation UpdateDonation(
    $id: Int!
    $userId: Int
    $amount: Float
    $tip: Float
  ) {
    updateDonation(id: $id, userId: $userId, amount: $amount, tip: $tip) {
      id
      user {
        id
      }
      amount
      tip
    }
  }
`

export const DONATION_DELETE = gql`
  mutation DeleteDonation($id: Int!) {
    deleteDonation(id: $id) {
      id
      user {
        id
      }
      amount
      tip
    }
  }
`
