## Node Interface

This lesson is based on the `Relay Global Object Identification Specification` https://facebook.github.io/relay/graphql/objectidentification.htm

Query nodes and then also query specifics for certain products:

```graphql
{
  node(id: "abc") {
    id
    ... on Product {
      name
    }
  }
}
```

There is one issue though with this spec. What if you use a Database like MySQL and you IDs are number based and not unique per table.

What you can do is generate the IDs out of this template:

```
idversion:type:databaseID
```

```js
const id = window.btoa("4:Product:42");
console.log(id);
const raw = window.atob(id);
console.log(raw);
```

For example Github is doing something like that:

https://developer.github.com/v4/explorer/

```graphql
query { 
  viewer { 
    id
    login
    databaseId
  }
}
```

```js
window.atob("MDQ6VXNlcjIyMzA0NQ==")
```

## Exercise

Fetch your own viewer ID from Github and decode it.
