"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMutateType = exports.ErrorType = exports.DonationType = exports.UserType = void 0;
var graphql_1 = require("graphql");
var donations_1 = __importDefault(require("../data/donations"));
var users_1 = __importDefault(require("../data/users"));
var mutation_1 = __importDefault(require("./mutation"));
var query_1 = __importDefault(require("./query"));
exports.UserType = new graphql_1.GraphQLObjectType({
    name: 'User',
    description: 'Represents a user than can make donations',
    fields: function () { return ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
        firstName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        lastName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        email: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        donations: {
            type: new graphql_1.GraphQLList(exports.DonationType),
            resolve: function (user) {
                return donations_1.default.filter(function (donation) { return donation.userId === user.id; });
            },
        },
    }); },
});
exports.DonationType = new graphql_1.GraphQLObjectType({
    name: 'Donation',
    description: 'Represents a donation that can be made by a user',
    fields: function () { return ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
        userId: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
        user: {
            type: (0, graphql_1.GraphQLNonNull)(exports.UserType),
            resolve: function (donation) { return users_1.default.find(function (user) { return user.id === donation.userId; }); },
        },
        amount: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLFloat) },
        tip: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLFloat) },
    }); },
});
exports.ErrorType = new graphql_1.GraphQLObjectType({
    name: 'Error',
    description: 'Contains errors that occur in GraphQL, such as improper arguments',
    fields: function () { return ({
        error: { type: graphql_1.GraphQLString },
    }); },
});
exports.UserMutateType = new graphql_1.GraphQLUnionType({
    name: 'UpdateUser',
    types: [exports.UserType, exports.ErrorType],
    resolveType: function (_a) {
        var error = _a.error;
        if (error) {
            return exports.ErrorType;
        }
        else {
            return exports.UserType;
        }
    },
});
var schema = new graphql_1.GraphQLSchema({
    query: query_1.default,
    mutation: mutation_1.default,
});
exports.default = schema;
//# sourceMappingURL=index.js.map