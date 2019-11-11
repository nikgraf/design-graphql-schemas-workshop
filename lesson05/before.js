const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    description(format: String, locale: String): String
    imageUrl: String!
  }

  type Query {
    product(id: ID!): Product
  }
`;

const resolvers = {};

const mocks = {};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false
};
