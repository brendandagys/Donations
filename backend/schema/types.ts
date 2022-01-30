import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
} from 'graphql'

import users from '../data/users'
import donations from '../data/donations'

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
    user: {
      type: UserType,
      resolve: (donation) => users.find((user) => user.id === donation.userId),
    },
    amount: { type: GraphQLNonNull(GraphQLFloat) },
    tip: { type: GraphQLNonNull(GraphQLFloat) },
  }),
})
