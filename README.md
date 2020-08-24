# TDD with Mocha & Chai

- Automated testing
- What is unit testing
- What is test drivent developement (TDD)
- Node Assert Module
- Breakout Exercise (repeatNumbers)
- What are modules  
- Mocha
- Chai
- BDD

## Automated Testing

- Save time compared to manuel testing
- Easy to see if new changes to our code is breaking anything
- Think about potential bugs up-front
- Write more modular code
- Improve overall code quality
- Could be integrated into build workflow

## What is unit testing

- Testing if a specific functionality of our app is working as expected
- Usually testing a method or functions

## Test-driven development (TDD)

Test-driven development (TDD) relies on tests to drive development.

1. Write a failing test to indicate which functionality needs to be added and how it should behave.

2. Write the minimal amount of code to make the test pass. At this stage, the code doesn’t have to be elegant or clean.

3. Refactor the code. Clean up the code to make it more readable and maintainable.

## Node Assert Module

- [NbVowels Exercise](https://web.compass.lighthouselabs.ca/activities/780)

- [Assert NodeJS Examples](https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html)

### Breakout Exercises

Let's do TDD with the Node.js assert module using Kata 6, repeating numbers.

- [Kata 6 - Repeating Numbers](https://web.compass.lighthouselabs.ca/2f4fbf0f-2ff0-4cd4-a40d-1c38dda7158c)

## Modules

Modules are keeping a set of functions in separates files. We can think of modules as JavaScript librairies. 

- Keeping modules separate ensures that our code remains well organized and modular
- These functions can be added to our app reused any number of times

3 types of modules

1. Core modules
2. Local modules
3. Third-party modules

### Core Modules

Modules built into Node.js that can be required in our code without installing any external code.

> Ex: fs, http, util, etc.

### Local modules

Modules created locally in our Node.js application. Modules allow us to store different functionalities into separate files that can be included into our app and can be reused any number of times.

### Third-Party Modules

Modules created by the JavaScript community and published on npm. These modules are located in the __node_modules__ directory and can be loaded by the Node.js require() function.

- npm is a command line utility that comes installed with Node.js to manage Node.js packages. 

- npm is also an online repository for open-source Node.js packages. 

- npm packages can be added as **dependencies** to our app to extend its functionalities

## Installing Mocha and Chai

- Mocha is a testing framework (test runner)
- Chai is an assertion library

`npm install --save-dev mocha`

## Chai

- Chai is an assertion library that allows us to more fully embrace BDD.

### BDD - Behaviour Driven Development

Behavior Driven Development (BDD) is a branch of Test Driven Development (TDD).

- Describes the behavior of the system from the customer’s point of view

- Based on users'stories

- Uses a more natural language that everyone can understand

## Sales Tax Exercise

- [W1D3 - Objects - Sales Tax](https://web.compass.lighthouselabs.ca/days/w01d3/activities/113)