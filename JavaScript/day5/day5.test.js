const filter = require("./day5").filter;

test(`Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.`, () => {
  const arr = [0, 10, 20, 30];
  const fn = function greaterThan10(n) {
    return n > 10;
  };

  expect(filter(arr, fn)).toStrictEqual([20, 30]);
});
