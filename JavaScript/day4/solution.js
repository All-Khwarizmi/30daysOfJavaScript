/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
module.exports.map = function (arr, fn) {
  let len = arr.length;
  let copyArr = [];
  for (let idx = 0; idx < len; idx++) {
    copyArr.push(fn(arr[idx], idx));
  }

  return copyArr;
};
