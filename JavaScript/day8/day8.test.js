const once = require("./day8").once;

test(`Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.`, () => {
  let fn = (a, b, c) => a + b + c;
  let onceFn = once(fn);
  expect(onceFn(1, 2, 3)).toBe(6);
  expect(onceFn(2, 3, 6)).toBe(undefined);
});
