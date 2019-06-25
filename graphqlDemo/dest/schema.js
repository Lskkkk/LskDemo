"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const data_1 = __importDefault(require("./data"));
const User = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: {
        age: {
            type: graphql_1.GraphQLString
        },
        name: {
            type: graphql_1.GraphQLString
        }
    }
});
const Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: User,
            args: {
                id: {
                    type: graphql_1.GraphQLString
                }
            },
            resolve: (_, args) => {
                return data_1.default[args.id];
            }
        }
    }
});
const schema = new graphql_1.GraphQLSchema({
    query: Query
});
exports.default = schema;
