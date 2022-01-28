import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} from 'graphql'

import users from '../data/users'
import donations from '../data/donations'

import { UserType } from '.'
import { DonationType } from '.'

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      description: 'List of all users',
      resolve: () => users,
    },
    user: {
      type: UserType,
      description: 'A single book based on the ID',
      args: { id: { type: GraphQLInt } },
      resolve: (_, args) => users.find(({ id }) => id === args.id),
    },
    donations: {
      type: new GraphQLList(DonationType),
      description: 'List of all donations',
      resolve: () => donations,
    },
    donation: {
      type: DonationType,
      description: 'A single donation based on the ID',
      args: { id: { type: GraphQLInt } },
      resolve: (_, args) => donations.find(({ id }) => id === args.id),
    },
  }),
})

export default RootQueryType
