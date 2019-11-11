## Naming Queries

Postfixing is useful to describe the arguments by what something is fetched! (it's likely to not change)
If necessary deprecate.

```graphql
{
  productBySlug(slug: "/product/blackbook") {
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
