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
var users_1 = __importDefault(require("../data/users"));
var donations_1 = __importDefault(require("../data/donations"));
var _1 = require(".");
var _2 = require(".");
var _3 = require(".");
var RootMutationType = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: function () { return ({
        createUser: {
            type: _1.UserType,
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
            type: _3.UserMutateType,
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
            type: _3.UserMutateType,
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
        createDonation: {
            type: _2.DonationType,
            description: 'Creates a donation',
            args: {
                amount: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                tip: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                userId: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
            },
            resolve: function (_, args) {
                var donation = {
                    id: Math.max.apply(Math, donations_1.default.map(function (_a) {
                        var id = _a.id;
                        return id;
                    })) + 1,
                    userId: args.userId,
                    amount: args.amount,
                    tip: args.tip,
                };
                donations_1.default.push(donation);
                return donation;
            },
        },
        updateDonation: {
            type: _3.UserMutateType,
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
        deleteDonation: {
            type: _3.UserMutateType,
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
exports.default = RootMutationType;
//# sourceMappingURL=userMutations.js.map