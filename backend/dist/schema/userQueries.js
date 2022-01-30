"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var users_1 = __importDefault(require("../data/users"));
var donations_1 = __importDefault(require("../data/donations"));
var _1 = require(".");
var _2 = require(".");
var RootQueryType = new graphql_1.GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: function () { return ({
        users: {
            type: new graphql_1.GraphQLList(_1.UserType),
            description: 'List of all users',
            resolve: function () { return users_1.default; },
        },
        user: {
            type: _1.UserType,
            description: 'A single book based on the ID',
            args: { id: { type: graphql_1.GraphQLInt } },
            resolve: function (_, args) { return users_1.default.find(function (_a) {
                var id = _a.id;
                return id === args.id;
            }); },
        },
        donations: {
            type: new graphql_1.GraphQLList(_2.DonationType),
            description: 'List of all donations',
            resolve: function () { return donations_1.default; },
        },
        donation: {
            type: _2.DonationType,
            description: 'A single donation based on the ID',
            args: { id: { type: graphql_1.GraphQLInt } },
            resolve: function (_, args) { return donations_1.default.find(function (_a) {
                var id = _a.id;
                return id === args.id;
            }); },
        },
    }); },
});
exports.default = RootQueryType;
//# sourceMappingURL=userQueries.js.map