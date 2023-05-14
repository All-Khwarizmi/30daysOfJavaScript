/**
 * @param {number} n
 * @return {Function} counter
 */
module.exports.createCounter = function (n) {
  return function () {
    return n++;
  };
};
