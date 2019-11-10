const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Real Hello Workshop',
  },
};

const mocks = {
  String: () => "Hello Workshop"
};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false
};
