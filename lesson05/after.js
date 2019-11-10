const { gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    source: String # Url scalar
    description: String
    thumbnailSource(width: Int, height: Int): String # Url scalar
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: ID!
    endCursor: ID!
  }

  type RecommendedProductsEdge {
    node: Product!
    cursor: ID!
  }

  type RecommendedProductsConnection {
    edges: [RecommendedProductsEdge]
    pageInfo: PageInfo!
  }

  type Product {
    id: ID!
    name: String
    description(format: String, locale: String): String
    imageUrl: String @deprecated(reason: "Use \`image { source }\`.")
    image: Image
    recommendedProducts(first: Int!, after: ID): [RecommendedProductsConnection!]
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
