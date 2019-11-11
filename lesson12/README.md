# Naming and structuring Mutations

## Where to start?

CRDU (Create, Read, Update, Delete)

That said: DO NOT FOLLOW CRUD! GraphQL gives you flexibility. Let's leverage it.

Let's look at the use-case of the admin interface where we can create and update products.

```
createProduct
updateProduct
```

In a simple case of name & description would be required and the Ppayloads only distinguish by the ID.

```
input CreateProductInput {
  name: String!
  description: String!
}

input UpdateProductInput {
  productId: String!
  name: String!
  description: String!
}

type Mutation {
  createProduct(input: CreateProductInput!): CreateProductPayload!
  updateProduct(input: UpdateProductInput!): UpdateProductPayload!
}
```

```graphql

mutation {
  createProduct(input: {name: "Greenbook", description: "Recycled"}) {
    product {
      id
    }
  }
}
mutation {
  updateProduct(input: {productId: "abc", name: "Greenbook", description: "Recycled"}) {
    product {
      id
    }
  }
}
```

But there is an issue here! I need to provide the full object everytime I want update a product. This leads to write issue e.g.

Max fetches Product A
Nik fetches Product A
Nik updates the name of Product A
Nik updates the description of Product A, because he never received the new name he overwrites the name.

What's one solution:

When we have only required fields we can make them nullable and when left out this means we don't want them to be overwritten.

```graphql
input UpdateProductInput {
  productId: String!
  name: String
  description: String
}
```

```graphql
mutation {
  updateProduct(input: {productId: "abc", description: "Recycled"}) {
    product {
      id
    }
  }
}

mutation {
  updateProduct(input: {productId: "abc", description: "Recycled", name: null}) {
    product {
      id
    }
  }
}
```

> In GraphQL input variables, there is no difference between null and undefined. The value null means "lack of a value".

https://github.com/graphql/graphql-js/issues/133#issuecomment-132391538

The issue here this is more of a convention and it breaks down when you have nullable fields as this could simply mean you want to just leave it out of update or really want to set it to null.

In addition I believe this is also a product related questions. Sometimes it doesn't make sense to update values isolated and the changes only make sense together!

Example with updating the name, but not description
```graphql
mutation {
  updateProduct(input: {update: {name: "Greenbook", description: null}, delete: []}) {
    product {
      id
    }
  }
}
```

Example with updating the name, but not description
```graphql
mutation {
  updateProduct(input: {update: {name: null, description: null}, delete: ["description"]}) {
    product {
      id
    }
  }
}
```

__Note__: Nesting in mutations is totally fine and same as for queries rather encouraged than discouraged.

That said you don't see this a lot in the wild and it's only required if you have fields that allow setting them to null.
https://developer.github.com/v4/explorer/ -> updateProject

## Alternative?

```graphql
updateProductName
updateProductDescription
```

Maybe that's a bit to much! That said it makes a lot of sense for plenty of use-cases:

```graphql
publishProduct
unpublishProduct
```

You really really don't want this to be done by one user and then accidentially reverted by another without notice.

Especially for adding relationships this is even more relevant!

DON'T (you need to update the full list)
```graphql
input UpdateRecommendedProductsInput {
  productId: String!
  recommendedProductIds: [String]!
}

updateRecommendedProducts(input: UpdateRecommendedProductsInput!): UpdateRecommendedProductsPayload!
```

DO
```graphql
input AddRecommendedProductsInput {
  productId: String!
  recommendedProductIds: [String]!
}

input RemoveRecommendedProductsInput {
  productId: String!
  recommendedProductIds: [String]!
}

addRecommendedProducts(input: AddRecommendedProductsInput!): AddRecommendedProductsPayload!
removeRecommendedProducts(input: RemoveRecommendedProductsInput!): RemoveRecommendedProductsPayload!
```

```graphql
mutation {
  publishProduct(input: {productId: "abc"}) {
    product {
      id
    }
    errors {
      code
      message
      fieldPath
    }
  }
}
```

> Specific mutations that correspond to semantic user actions are more powerful than general mutations.

https://blog.apollographql.com/designing-graphql-mutations-e09de826ed97

One interesting case is: `sendPasswordResetEmail`, because you might want to do `sendEmail(type: PASSWORD_RESET)`. Don't generalize too early.

## Optimize for multiple!

- mutation relationships: addRecommendedProducts and not addRecommendedProduct

-> convenience for the client as it makes it possible to cover more usecases e.g. form where you locally select mutliple and then submit. Of course it's possible to run multiple mutations, but that's not as comfortable. 
Other benefits:
- Performance through parallelisation
- In addition root mutations are guaranteed to execute in order. What if one fails?!?

What about `publishProduct`?

## What others do?

https://www.youtube.com/watch?v=pJamhW2xPYw
GraphQL Schema Design @ Scale (Marc-André Giroux)

Just do both!

- Finer grained mutations
- Have this big input mutations that accept all

## Q&A

## Exercise

For the mutations `addRecommendedProducts` and `removeRecommendedProducts` no payload has been defined. For `addRecommendedProducts` there is one expected error: "The product already has been added". For `removeRecommendedProducts` there is one expected error: "The product has not been a recommended product".

Think about how this could look like, implement it and run the mutation to verify your Schema is valid.

**Bonus**: Implement a mock that returns the expected error for one use-case.
