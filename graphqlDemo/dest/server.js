"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const schema_1 = __importDefault(require("./schema"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const app = express_1.default();
app.get('/', (_, res) => {
    res.sendfile('./src/page.html');
});
app.get('/graphql', express_graphql_1.default({
    schema: schema_1.default,
    graphiql: true
}));
app.post('/graphql', express_graphql_1.default({
    schema: schema_1.default,
    graphiql: true
}));
const start = () => {
    app.listen(3000);
};
exports.default = {
    start
};
