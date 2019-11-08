const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    resolved: String
  }
`;

const resolvers = {
  Query: {
    resolved: () => "Resolved"
  }
};

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => "Hello2"
};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false
};
