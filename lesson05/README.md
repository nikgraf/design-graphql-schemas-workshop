# Nullable Fields

## Presentation

Inspiration: https://graphql.org/learn/best-practices/#nullability

## Nullability for Lists

Most of the times you want the item to be present.

```graphql
fieldName: [String]     # can be null | ["abc", "cde"] | ["abc", null, "cde"]
fieldName: [String!]    # can be null | ["abc", "cde"]
fieldName: [String!]!   # can be ["abc", "cde"]
```

This make a lot of sense (most of the time!)

```graphql
fieldName: [String!]
```

But yeah, sometimes gaps in a list might be desired e.g.

```
products(ids: [ID!]!): [Product]!
```

## Exercise

Revisit your price field design from the previous lesson and see if you would change anything.

Make it flexible to support USD / EUR.
