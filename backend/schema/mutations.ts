import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql'

import users from '../data/users'
import donations from '../data/donations'

import { UserType } from './types'
import { DonationType } from './types'

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    createUser: {
      type: UserType,
      description: 'Create a user',
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, args) => {
        const user = {
          id: users.length > 0 ? Math.max(...users.map(({ id }) => id)) + 1 : 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
        }

        users.push(user)
        return user
      },
    },

    updateUser: {
      type: UserType,
      description: 'Update a user',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: (_, { id, ...rest }) => {
        const userIndex = users.findIndex((user) => user.id === id)
        if (userIndex === -1) throw new Error('No user with that ID exists')

        users[userIndex] = { ...users[userIndex], ...rest }
        return users[userIndex]
      },
    },

    deleteUser: {
      type: UserType,
      description: 'Delete a user',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_, { id }) => {
        const userIndex = users.findIndex((user) => user.id === id)
        if (userIndex === -1) throw new Error('No user with that ID exists')

        return users.splice(userIndex, 1)[0]
      },
    },

    createDonation: {
      type: DonationType,
      description: 'Create a donation',
      args: {
        userId: { type: GraphQLNonNull(GraphQLInt) },
        amount: { type: GraphQLNonNull(GraphQLFloat) },
        tip: { type: GraphQLNonNull(GraphQLFloat) },
      },
      resolve: (_, args) => {
        const user = users.find(({ id }) => id === args.userId)
        if (!user) throw new Error('No user with that ID exists')

        const donation = {
          id:
            donations.length > 0
              ? Math.max(...donations.map(({ id }) => id)) + 1
              : 1,
          userId: args.userId,
          amount: args.amount,
          tip: args.tip,
        }

        donations.push(donation)
        return donation
      },
    },

    updateDonation: {
      type: DonationType,
      description: 'Update a donation',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        userId: { type: GraphQLInt },
        amount: { type: GraphQLFloat },
        tip: { type: GraphQLFloat },
      },
      resolve: (_, { id, userId, ...rest }) => {
        const donationIndex = donations.findIndex(
          (donation) => donation.id === id
        )
        if (donationIndex === -1)
          throw new Error('No donation with that ID exists')

        donations[donationIndex] = {
          ...donations[donationIndex],
          userId,
          ...rest,
        }

        return donations[donationIndex]
      },
    },

    deleteDonation: {
      type: DonationType,
      description: 'Delete a donation',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_, { id }) => {
        const donationIndex = donations.findIndex(
          (donation) => donation.id === id
        )
        if (donationIndex === -1)
          throw new Error('No donation with that ID exists')

        return donations.splice(donationIndex, 1)[0]
      },
    },
  }),
})

export default RootMutationType
