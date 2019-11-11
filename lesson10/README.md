# Mutation Payload

One upside of GraphQL is that arguements are not positional arguments! they can be flipped.

```graphql
mutation {
  createProduct(name: "Greenbook", description: "Recycled Notebook") {
    id
  }
}
```

https://relay.dev/docs/en/v6.0.0/graphql-server-specification#mutations

> Relay uses a common pattern for mutations, where there are root fields on the mutation type with a single argument, input, and where the input and output both contain a client mutation identifier used to reconcile requests and responses.

> By convention, mutations are named as verbs, their inputs are the name with "Input" appended at the end, and they return an object that is the name with "Payload" appended.

Always use one Input. This part of the `Relay Input Object Mutations Specification`. https://relay.dev/graphql/mutations.htm

1. Mutations are named as verbs `createProduct`, `introduceShip`, `deleteCollection`.
2. Single argument input
3. The input type name is the capitalized mutation name with a `Input` postfix e.g. `CreateProductInput`, `IntroduceShipInput`.
4. The returned value is a new custom type that can contain various fields.
5. The return type is name is the capitalized mutation name with a `Payload` postfix e.g. `CreateProductPayload`, `IntroduceShipPayload`.

- do all these steps in the example

```graphql
mutation {
  createProduct(input: {name: "Greenbook", description: "Recycled"}) {
    product {
      id
    }
  }
}
```

### Why Input?

```
mutation CreateProductMutation($input: CreatePostInput!) {
  createProduct(input: $input) { ... }
}

# vs.

mutation CreateProductMutation($name: String!, $description: String!, ...) {
  createProduct(name: $name, description: $description, ...) { ... }
}
```

One Reason according to: https://blog.apollographql.com/designing-graphql-mutations-e09de826ed97

## Notable variation

## Rule 17

Instead of verb first
```
createProduct
updateProduct
deleteProduct
```

Shopify Tutorial https://github.com/Shopify/graphql-design-tutorial/blob/master/TUTORIAL.md#input-structure-part-1

> Rule #17: Prefix mutation names with the object they are mutating for alphabetical grouping (e.g. use orderCancel instead of cancelOrder).

```
productCreate
productUpdate
productDelete
```

Pro: Gathered together due alphabetization as a workaround.
Con: Doesn't read as naturally.
Con: might get hard to understand with long names: `productAddRecommendedProduct` or when writting very specific mutations: `sendPasswordResetEmail`.

> Naming conventions vary on a team-by-team basis. If you want to pick a different naming convention that’s fine, but stick to it! The above suggestion is the naming convention that I find works best for the largest range of use cases.

Caleb Meredith https://blog.apollographql.com/designing-graphql-mutations-e09de826ed97

## Rule 21

Rule #21: Structure mutation inputs to reduce duplication, even if this requires relaxing requiredness constraints on certain fields.

Basically `createProduct` & `upateProduct` would share the same fields except for the id.

```graphql
input CollectionInput {
  name: String!
  description: String!
}

type Mutation {
  createProduct(input: ProductInput!)
  updateProduct(productId: ID!, input: ProductInput!)
}
```

I recommend not to do this. It makes it harder to move forward and while it's less code you end up with a system that's harder to understand.

