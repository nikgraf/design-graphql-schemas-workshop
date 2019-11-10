const { gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    source: String # Url scalar
    description: String
    thumbnailSource(width: Int, height: Int): String # Url scalar
  }

  type Product {
    id: ID!
    name: String
    description(format: String, locale: String): String
    imageUrl: String @deprecated(reason: "Use \`image { source }\`.")
    image: Image
    recommendedProducts: [Product!]
    # recommendedProducts(limit: Int!, page: Int): [Product!]
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
