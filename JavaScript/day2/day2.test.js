const createCounter = require('./day2').createCounter;

module.exports.day2Test = test('Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).', () => {
  const counter = createCounter(10);
  expect(counter()).toBe(10);
  expect(counter()).toBe(11);
  expect(counter()).toBe(12);
});
