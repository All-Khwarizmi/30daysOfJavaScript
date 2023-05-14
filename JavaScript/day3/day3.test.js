const createCounter = require('./day3').createCounter;

test(`
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.`, () => {
  const counter = createCounter(5);
  expect(counter.increment()).toBe(6);
  expect(counter.reset()).toBe(5);
  expect(counter.decrement()).toBe(4);
});
