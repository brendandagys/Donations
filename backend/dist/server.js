"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_graphql_1 = require("express-graphql");
var schema_1 = __importDefault(require("./schema"));
var NODE_ENV = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development';
var PORT = (_b = process.env.PORT) !== null && _b !== void 0 ? _b : 5555;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    graphiql: true,
}));
app.get('*', function (req, res) {
    res.send("GraphQL server for Donations App is running in ".concat(NODE_ENV, " on port ").concat(PORT, "..."));
});
app.listen(PORT, function () {
    return console.log("GraphQL server for Donations App is running in ".concat(NODE_ENV, " on port ").concat(PORT, "..."));
});
//# sourceMappingURL=server.js.map