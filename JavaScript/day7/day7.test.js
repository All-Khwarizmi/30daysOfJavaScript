const compose = require("./solution").compose;

test(`Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.`, () => {
  const fn = compose([(x) => x + 1, (x) => 2 * x]);
  expect(fn(4)).toBe(9);
});
