const createHelloWorld = require('./day1').createHelloWorld;

module.exports.day1Test =
  test('Write a function createHelloWorld. It should return a new function that always returns "Hello World".', () => {
    const f = createHelloWorld();
    expect(f()).toBe('Hello World');
  });
