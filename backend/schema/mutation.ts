import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql'

import users from '../data/users'
import donations from '../data/donations'

import { UserType } from '.'
import { DonationType } from '.'
import { UserMutateType } from '.'

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    createUser: {
      type: UserType,
      description: 'Creates a user',
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, args) => {
        const user = {
          id: Math.max(...users.map(({ id }) => id)) + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
        }

        users.push(user)
        return user
      },
    },

    updateUser: {
      type: UserMutateType,
      description: 'Updates a user',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: (_, { id, ...rest }) => {
        const userIndex = users.findIndex((user) => user.id === id)
        if (userIndex === -1) {
          return { error: 'No user with that ID exists' }
        }

        users[userIndex] = { ...users[userIndex], ...rest }
        return users[userIndex]
      },
    },

    deleteUser: {
      type: UserMutateType,
      description: 'Deletes a user',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_, { id }) => {
        const userIndex = users.findIndex((user) => user.id === id)
        if (userIndex === -1) {
          return { error: 'No user with that ID exists' }
        }

        const user = users[userIndex]
        users.splice(userIndex, 1)
        return user
      },
    },
  }),
})

export default RootMutationType
