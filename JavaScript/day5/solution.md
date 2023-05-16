# Solution 

```
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


```

# Walk Through

For this exercice we repeat the firsts steps of the previous one.

<br>

The only difference is that this time we have an if statement inside the for loop. We check if the call of the fn function with each member of the arr array evaluates to true. If so push the element to the copyArr which we then return.

<br>

# Conclusions

That's how the Array.filter method works under the hood.