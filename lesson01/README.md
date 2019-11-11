# Setup

For this course any GraphQL server would do. Out of convinience I'm going to use apollo-server since it comes with an option allowing us to provide only the type definitions and automatically mock the resolvers.

Here I'm having my type definitions file containing a query `helloWorld`.

* show the typedefs

```js
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
```

The server is already running. We can open GraphiQL in the browser by visiting "http://localhost:4000".

## Hello World

```graphql
{
  hello
}
```

```json
{
  "data": {
    "hello": "Hello World"
  }
}
```

## Implement a mock

```js
const mocks = {
  String: () => "Hello Workshop"
};
```

```graphql
{
  hello
}
```

```json
{
  "data": {
    "hello": "Hello Workshop"
  }
}
```

## Implement a resolver

```js
const resolvers = {
  Query: {
    hello: () => 'Real Hello Workshop',
  },
};
```

```graphql
{
  hello
}
```

```json
{
  "data": {
    "hello": "Real Hello Workshop"
  }
}
```
