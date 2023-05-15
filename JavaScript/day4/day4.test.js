const map = require("./day4").map;

test(`Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.`, () => {
  const arr = [1, 2, 3];
  const fn = function plusone(n) {
    return n + 1;
  };

  expect(map(arr, fn)).toStrictEqual([2, 3, 4]);
});
