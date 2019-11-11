# Design Process

## How to get to a good design

Firt step: What does good design mean when in the context of GraphQL?

Good design means optimizing for one or few use-cases. The schema should be easy to use for these cases.
There is one gotcha though. We don’t live in a perfect world and while we optimize for the current use-case we might learn something new and our use-case changes. So we need to optimize for another thing: change.

- Use-cases
- Change

While sometimes these go hand in hand, other times they lead to different optima and then tradeoffs are required. That’s why the ideal is rather a mixture of designing for the current use-case, but in a way that it allows modifications with ease.

## What do other say?

> On a closely related note, a good API does not model the user interface either. The implementation and the UI can both be used for inspiration and input into your API design, but the final driver of your decisions must always be the business domain.

https://github.com/Shopify/graphql-design-tutorial/blob/master/TUTORIAL.md#conclusion

## Practical Advice

That's hard! The best you can get is at least map the UI.

With sane naming you can learn and evolve. We can try hard, but let's be honest nobody gets it right the first time. Iterative processes rock and that's why we want to optimize for them.

## Let's get started

-> see presentation

## Note: It's not about the implementation!

You might use Apollo server for the examples, but this shouldn't restrict us. And if you use Apollo in the frontend you might change to Urql at some point. Who knows?

Of course there are exceptions: When using Relay I strongly recommend you stick to their specs, because then Relay can help you so much creating better experiences.

## Exercise

Implement the price.

Further facts:
- We only support one currency: USD
- Price has two decimal places

_Hint:_ Don't use float since it could lead to rounding errors. see https://softwareengineering.stackexchange.com/a/101170
