# Connections incl. Cursors

## Presentation

https://graphql.org/learn/pagination/

Final:

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

## Exercise

Add the field `reviews` to the product.
A review includes a mandatory start voting, an optional text and a mandatory connection to one user.
Further it should be possible to retrieve if the reviewer actually purchased the product.

__Hint__: The User type can simply include ID and username.
