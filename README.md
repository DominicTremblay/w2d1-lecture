# TDD

## Automated Testing

- Save time compared to manuel testing
- Easy to see if new changes to our code is breaking anything
- Could be integrated into build workflow
- Think about potential bugs up-front
- Write more modular code
- Improve overall code quality

## Test-driven development (TDD) relies on tests to drive development

1. Write a failing test to indicate which functionality needs to be added and how it should behave.

2. Write the minimal amount of code to make the test pass. At this stage, the code doesn’t have to be elegant or clean.

3. Refactor the code. Clean up the code to make it more readable and maintainable.

## BDD - Behaviour Drive Development

- Describes the behavior of the system from the customer’s point of view

- Based on users'stories

- Uses a more natural language that everyone can understand

## What is unit testing

- Testing if a specific functionality of our app is working as expected
- Usually testing a method or function

### Key Caracteristics of Good Unit Tests

- Unit tests should be isolated

  - Tests should not rely on external data
  - Keeps the tests consistent
  - Tests should not fail because of external factors

- Unit tests should be fast

- Tests should not produce side-effets

  - should not do crud operations on a database or sending emails

## Integration tests

- Multiple units put together
- Check that the code works in integration with shared dependencies
- For example, code that rely on the state of the database

## Functional tests

- Also called E2E (End-To-End) testing, UI tests
- Testing the UI like a real user
- Test are performed with a headless browser (selenium) and a testing framework like Capybara or Cypress

## Installing Mocha and Chai

- Mocha is a testing framework (test runner)
- Chai is an assertion library

`npm install --save-dev mocha chai`

## Build-in Assert in NodeJS

- `assert.equal(true, value, [message]);`
- `assert.ok(value, [message])`

```js
// these three assertions are equivalent:
assert(expected == 3, 'one plus two is three');
assert.ok(expected == 3, 'one plus two is three');
assert.equal(expected, 3, 'one plus two is three');
```

## Chai

- Chai is an assertion library that allows us to more fully embrace BDD.
- You can add a script in your package.json and then run `npm run test`

```js
  ...
  "scripts": {
    "test": "node_modules/.bin/mocha"
  },
  ...
```

- [Assert NodeJS Examples](https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html)
