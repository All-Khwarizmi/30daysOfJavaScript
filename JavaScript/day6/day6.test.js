const reduce = require('./day6').reduce;

test(`Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.`, () => {

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr;
};
const init = 0;

expect(reduce(nums, fn, init)).toStrictEqual(10)

expect(reduce([], fn, 40)).toStrictEqual(40)


});

