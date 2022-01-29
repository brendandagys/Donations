import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLUnionType,
  GraphQLList,
} from 'graphql'
import donations from '../data/donations'

import users from '../data/users'
import RootMutationType from './mutation'
import RootQueryType from './query'

export const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'Represents a user than can make donations',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    firstName: { type: GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    donations: {
      type: new GraphQLList(DonationType),
      resolve: (user) =>
        donations.filter((donation) => donation.userId === user.id),
    },
  }),
})

export const DonationType = new GraphQLObjectType({
  name: 'Donation',
  description: 'Represents a donation that can be made by a user',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    userId: { type: GraphQLNonNull(GraphQLInt) },
    user: {
      type: GraphQLNonNull(UserType),
      resolve: (donation) => users.find((user) => user.id === donation.userId),
    },
    amount: { type: GraphQLNonNull(GraphQLFloat) },
    tip: { type: GraphQLNonNull(GraphQLFloat) },
  }),
})

export const ErrorType = new GraphQLObjectType({
  name: 'Error',
  description:
    'Contains errors that occur in GraphQL, such as improper arguments',
  fields: () => ({
    error: { type: GraphQLString },
  }),
})

export const UserMutateType = new GraphQLUnionType({
  name: 'UpdateUser',
  types: [UserType, ErrorType],
  resolveType: ({ error }) => {
    if (error) {
      return ErrorType
    } else {
      return UserType
    }
  },
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
})

export default schema
