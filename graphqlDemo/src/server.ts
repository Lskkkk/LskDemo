import express from 'express';
import schema from './schema';
import graphqlHTTP from 'express-graphql';

const app = express();

app.get('/', (_, res) => {
    res.sendfile('./src/page.html');
});

app.get('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.post('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const start = () => {
    app.listen(3000);
};

export default {
    start
};