/**
 * @param {Function[]} functions
 * @return {Function}
 */
module.exports.compose = function (functions) {
  let arrFn = functions;
  return function composition(x) {
    if (!functions.length) return x;
    if (!arrFn.length) return;

    const func = arrFn.pop();

    return composition(func(x));
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
