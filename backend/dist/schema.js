"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var users_1 = __importDefault(require("./data/users"));
var donations_1 = __importDefault(require("./data/donations"));
var UserType = new graphql_1.GraphQLObjectType({
    name: 'User',
    description: 'Represents a user than can make donations',
    fields: function () { return ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
        firstName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        lastName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        email: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
    }); },
});
var DonationType = new graphql_1.GraphQLObjectType({
    name: 'Donation',
    description: 'Represents a donation that can be made by a user',
    fields: function () { return ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
        userId: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
        user: {
            type: UserType,
            resolve: function (donation) { return users_1.default.find(function (user) { return user.id === donation.userId; }); },
        },
        amount: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLFloat) },
        tip: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLFloat) },
    }); },
});
var ErrorType = new graphql_1.GraphQLObjectType({
    name: 'Error',
    description: 'Contains errors that occur in GraphQL, such as improper arguments',
    fields: function () { return ({
        error: { type: graphql_1.GraphQLString },
    }); },
});
var UserMutateType = new graphql_1.GraphQLUnionType({
    name: 'UpdateUser',
    types: [UserType, ErrorType],
    resolveType: function (_a) {
        var error = _a.error;
        if (error) {
            return ErrorType;
        }
        else {
            return UserType;
        }
    },
});
var RootQueryType = new graphql_1.GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: function () { return ({
        users: {
            type: new graphql_1.GraphQLList(UserType),
            description: 'List of all users',
            resolve: function () { return users_1.default; },
        },
        user: {
            type: UserType,
            description: 'A single book based on the ID',
            args: { id: { type: graphql_1.GraphQLInt } },
            resolve: function (_, args) { return users_1.default.find(function (_a) {
                var id = _a.id;
                return id === args.id;
            }); },
        },
        donations: {
            type: new graphql_1.GraphQLList(DonationType),
            description: 'List of all donations',
            resolve: function () { return donations_1.default; },
        },
        donation: {
            type: DonationType,
            description: 'A single donation based on the ID',
            args: { id: { type: graphql_1.GraphQLInt } },
            resolve: function (_, args) { return donations_1.default.find(function (_a) {
                var id = _a.id;
                return id === args.id;
            }); },
        },
    }); },
});
var RootMutationType = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: function () { return ({
        createUser: {
            type: UserType,
            description: 'Creates a user',
            args: {
                firstName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                lastName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                email: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
            },
            resolve: function (_, args) {
                var user = {
                    id: Math.max.apply(Math, users_1.default.map(function (_a) {
                        var id = _a.id;
                        return id;
                    })) + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                };
                users_1.default.push(user);
                return user;
            },
        },
        updateUser: {
            type: UserMutateType,
            description: 'Updates a user',
            args: {
                id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
                firstName: { type: graphql_1.GraphQLString },
                lastName: { type: graphql_1.GraphQLString },
                email: { type: graphql_1.GraphQLString },
            },
            resolve: function (_, _a) {
                var id = _a.id, rest = __rest(_a, ["id"]);
                var userIndex = users_1.default.findIndex(function (user) { return user.id === id; });
                if (userIndex === -1) {
                    return { error: 'No user with that ID exists' };
                }
                users_1.default[userIndex] = __assign(__assign({}, users_1.default[userIndex]), rest);
                return users_1.default[userIndex];
            },
        },
        deleteUser: {
            type: UserMutateType,
            description: 'Deletes a user',
            args: {
                id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
            },
            resolve: function (_, _a) {
                var id = _a.id;
                var userIndex = users_1.default.findIndex(function (user) { return user.id === id; });
                if (userIndex === -1) {
                    return { error: 'No user with that ID exists' };
                }
                var user = users_1.default[userIndex];
                users_1.default.splice(userIndex, 1);
                return user;
            },
        },
    }); },
});
var schema = new graphql_1.GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
});
exports.default = schema;
//# sourceMappingURL=schema.js.map