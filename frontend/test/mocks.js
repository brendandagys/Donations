import {
  DONATION_CREATE,
  DONATION_DELETE,
  DONATION_UPDATE,
} from '../graphql/mutations/donationMutations'
import {
  USER_CREATE,
  USER_DELETE,
  USER_UPDATE,
} from '../graphql/mutations/userMutations'
import {
  DONATIONS_QUERY,
  DONATION_QUERY,
} from '../graphql/queries/donationQueries'
import {
  USERS_QUERY,
  USERS_QUERY_SELECT_INPUT,
  USER_QUERY,
} from '../graphql/queries/userQueries'

export const mocks = [
  {
    request: {
      query: USER_QUERY,
      variables: { id: 2 },
    },
    result: {
      data: {
        user: {
          id: 2,
          firstName: 'Jeff',
          lastName: 'Blake',
          email: 'jeffblake@example.com',
        },
      },
    },
  },
  {
    request: {
      query: USERS_QUERY,
    },
    result: {
      data: {
        users: [
          {
            id: 1,
            firstName: 'Sarah',
            lastName: 'Downey',
            email: 'sarahdowney@example.com',
            donations: [{ amount: 40000, tip: 3000 }],
          },
          {
            id: 2,
            firstName: 'Jeff',
            lastName: 'Blake',
            email: 'jeffblake@example.com',
            donations: [{ amount: 2300, tip: 300 }],
          },
        ],
      },
    },
  },
  {
    request: {
      query: USERS_QUERY_SELECT_INPUT,
    },
    result: {
      data: {
        users: [
          { id: 1, firstName: 'John', lastName: 'Does' },
          { id: 2, firstName: 'Jane', lastName: 'Does' },
        ],
      },
    },
  },
  {
    request: {
      query: USER_CREATE,
      variables: {
        firstName: 'Harold',
        lastName: 'Abulla',
        email: 'haroldabulla@example.com',
      },
    },
    result: {
      data: {
        createUser: {
          id: 3,
          firstName: 'Harold',
          lastName: 'Abulla',
          email: 'haroldabulla@example.com',
        },
      },
    },
  },
  {
    request: {
      query: USER_UPDATE,
      variables: {
        id: 2,
        firstName: 'Harold',
        lastName: 'Abullam',
        email: 'haroldabullam@example.com',
      },
    },
    result: {
      data: {
        updateUser: {
          id: 2,
          firstName: 'Harold',
          lastName: 'Abullam',
          email: 'haroldabullam@example.com',
        },
      },
    },
  },
  {
    request: {
      query: USER_DELETE,
      variables: { id: 1 },
    },
    result: {
      data: {
        deleteUser: {
          id: 1,
          firstName: 'Sarah',
          lastName: 'Downey',
          email: 'sarahdowney@example.com',
        },
      },
    },
  },
  {
    request: {
      query: DONATION_QUERY,
      variables: { id: 2 },
    },
    result: {
      data: {
        donation: {
          id: 2,
          user: {
            id: 2,
            firstName: 'Jeff',
            lastName: 'Blake',
            email: 'sarahdowney@example.com',
          },
          amount: 10000,
          tip: 1500,
        },
      },
    },
  },
  {
    request: {
      query: DONATIONS_QUERY,
    },
    result: {
      data: {
        donations: [
          {
            id: 1,
            user: {
              id: 1,
              firstName: 'Sarah',
              lastName: 'Downey',
              email: 'sarahdowney@example.com',
            },
            amount: 5000,
            tip: 500,
          },
          {
            id: 2,
            user: {
              id: 2,
              firstName: 'Jeff',
              lastName: 'Blake',
              email: 'sarahdowney@example.com',
            },
            amount: 10000,
            tip: 1500,
          },
        ],
      },
    },
  },
  {
    request: {
      query: DONATION_CREATE,
      variables: {
        userId: 1,
        amount: 400,
        tip: 50,
      },
    },
    result: {
      data: {
        createDonation: {
          id: 3,
          user: { id: 1 },
          amount: 400,
          tip: 50,
        },
      },
    },
  },
  {
    request: {
      query: DONATION_UPDATE,
      variables: {
        id: 2,
        userId: 2,
        amount: 401,
        tip: 51,
      },
    },
    result: {
      data: {
        updateDonation: {
          id: 2,
          user: { id: 2 },
          amount: 401,
          tip: 51,
        },
      },
    },
  },
  {
    request: {
      query: DONATION_DELETE,
      variables: { id: 1 },
    },
    result: {
      data: {
        deleteDonation: {
          id: 1,
          user: { id: 1 },
          amount: 550,
          tip: 100,
        },
      },
    },
  },
]
