const { readFileSync } = require('fs');
const { makeExecutableSchema } = require('graphql-tools');
const { resolve } = require('path');

const typeDefs = readFileSync(resolve(__dirname, 'schema.graphql'), 'utf-8');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
