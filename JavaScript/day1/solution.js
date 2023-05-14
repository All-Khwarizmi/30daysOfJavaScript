/**
 * @return {Function}
 */
module.exports.createHelloWorld = function () {
  return function (...args) {
    return 'Hello World';
  };
};
