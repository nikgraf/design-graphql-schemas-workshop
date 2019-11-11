# Expected Errors in the Mutation Payload

Let's talk a bit more about the Payloal.

A mutation can fail. How can we deal with that. Every query or mutation consists of `data` and `error`. But these global errors are really hard to map and mostly use for unexpected errors.

What do I mean by expected error? For example to avoid confusion for the clients we want to prevent duplicated product. So an algorithm could check for exisiting content on content creation and return: "This product is already listed at 'https://example.com/greenbook'. Please update it instead of creating a new one."

```graphql
type Error {
  message: String
  code: Int
  fieldPath: [String!]
}

type CreateProductPayload {
  product: Product
  errors: [Error!]
}
```

```graphql
mutation {
  createProduct(input: {name: "Greenbook", description: "Recycled"}) {
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

There are couple different opions:

1. Unexpected errors shouldn't exists

All potential user errors should be already checked client-side e.g. for unique usernames the check should happend before submitting the form.

(What about charging a creditcard and there are no sufficient funds?)

2. You can make the Payload a Union type returning the Result or Errors

Pro: Great to use on the client
Pro: Very clear what's happening

Con: Breaks with Relay spec
Con: Might be missed by someone consuming the API

3. You can use the errors field in the payload

Pro: Great to use on the client
Pro: Supports edge-cases where you return data and errors.

Con: Might be missed by someone consuming the API

4. Use the errors field or Union in the payload in combination with the global errors

Pro: Great to use on the client
Pro: Can't be missed by someone consuming the API

Con: Clients can't handle unexpected errors globally without some kind of conventions

## Tradeoffs

Nik's Opinion: I probably would opt into #4, but haven't done it yet. Only 1, 2 & 3. Why because I learned this recently.

## Exercise

Implement the Union Type Payload response for the expected error.
