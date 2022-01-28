"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_graphql_1 = require("express-graphql");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var schema_1 = __importDefault(require("./schema"));
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    // rootValue: root,
    graphiql: true,
}));
app.get('*', function (req, res) {
    res.send("API server for Donations App is running in ".concat(process.env.NODE_ENV, " on port ").concat(PORT, "..."));
});
app.listen(PORT, function () {
    return console.log("API server for Donations App is running in ".concat(process.env.NODE_ENV, " on port ").concat(PORT, "..."));
});
//# sourceMappingURL=server.js.map