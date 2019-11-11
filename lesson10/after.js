const { gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    source: String # Url scalar
    description: String
    thumbnailSource(width: Int, height: Int): String # Url scalar
  }

  type PaginationEntry {
    cursor: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    hasNextPages(amount: Int!, first: Int): [PaginationEntry!]!
    hasPreviousPages(amount: Int!, first: Int): [PaginationEntry!]!
    startCursor: ID!
    endCursor: ID!
  }

  type RecommendedProductsEdge {
    node: Product!
    cursor: ID!
    boughtTogetherPercentage: Int
  }

  type RecommendedProductsConnection {
    edges: [RecommendedProductsEdge]
    pageInfo: PageInfo!
  }

  interface Node {
    id: ID!
  }

  type Product implements Node {
    id: ID!
    name: String
    description(format: String, locale: String): String
    imageUrl: String @deprecated(reason: "Use \`image { source }\`.")
    image: Image
    recommendedProducts(first: Int!, after: ID): [RecommendedProductsConnection!]
  }

  type Query {
    product(id: ID!): Product
    productBySlug(slug: String!): Product
    node(id: ID!): Node
  }

  input CreateProductInput {
    name: String!
    description: String!
  }

  type CreateProductPayload {
    product: Product
  }

  type Mutation {
    # createProduct(name: String!, description: String!): Product
    # createProduct(description: String!, name: String!): Product
    createProduct(input: CreateProductInput!): CreateProductPayload!
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
