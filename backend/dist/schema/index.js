"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var queries_1 = __importDefault(require("./queries"));
var mutations_1 = __importDefault(require("./mutations"));
var schema = new graphql_1.GraphQLSchema({
    query: queries_1.default,
    mutation: mutations_1.default,
});
exports.default = schema;
//# sourceMappingURL=index.js.map