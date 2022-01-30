import gql from 'graphql-tag'

export const DONATIONS_QUERY = gql`
  query AllDonations {
    donations {
      id
      user {
        id
        firstName
        lastName
        email
      }
      amount
      tip
    }
  }
`

export const DONATION_QUERY = gql`
  query OneDonation($id: Int!) {
    donation(id: $id) {
      id
      user {
        id
        firstName
        lastName
        email
      }
      amount
      tip
    }
  }
`
