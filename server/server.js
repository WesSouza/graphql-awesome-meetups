const bodyParser = require('body-parser');
const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const PORT = process.env.PORT || 3001;

const app = express();

const graphQLSchema = require('./graphql/executableSchema');
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: graphQLSchema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
