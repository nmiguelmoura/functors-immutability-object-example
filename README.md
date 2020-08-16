## Immutable
The instance returned is deep frozen, so it is the result of getValue()

## Declarative and Chainable
Functors allow us to be declarative and chain stuff

## Error handling
Instead of throwing errors and interrupting the chain of events, it returns a somewhat meaningful error message on each step that fails.
If in a chain of .map, one of them returns null or undefined, it doesn't throw an error. Instead following .map calls will get a Nothing object with an error message.

### Typescript convertion is work in progress!