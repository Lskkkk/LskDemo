import {
    GraphQLObjectType, GraphQLString, GraphQLSchema
} from 'graphql';
import data from './data';

const User = new GraphQLObjectType({
    name: 'User',
    fields: {
        age: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        }
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: User,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve: (_, args) => {
                return data[args.id];
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: Query
});

export default schema;