const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    description: String
    image: String
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
