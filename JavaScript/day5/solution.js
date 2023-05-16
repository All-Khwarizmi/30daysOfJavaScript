/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const len = arr.length;
  let copyArr = [];

  for (let idx = 0; idx < len; idx++) {
    if (fn(arr[idx], idx)) {
      copyArr.push(arr[idx]);
    }
  }

  return copyArr;
};
