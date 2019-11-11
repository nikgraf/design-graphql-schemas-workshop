# Extending Connections

Before

```graphql
{
  product(id: "abc") {
    id
    name
    description
    image {
      source
      description
    }
  	recommendedProducts(first: 10) {
      edges {
        node {
          name
          description
          image {
            source
            description
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
```

- add boughtTogetherPercentage
- add new pagination response

```graphql
{
  product(id: "abc") {
    id
    name
    description
    image {
      source
      description
    }
  	recommendedProducts(first: 10) {
      edges {
        node {
          name
          description
          image {
            source
            description
          }
        }
        boughtTogetherPercentage
      }
      pageInfo {
        hasNextPages(amount: 3) {
          cursor
        }
        hasPreviousPages(amount: 3) {
          cursor
        }
      }
    }
  }
}
```

- Of course you can also extend connection arguments e.g. filter or sorting
