# Solution 

```
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (!nums.length) return init;
  let val = init;
  nums.forEach((item) => {
    val = fn(val, item);
  });
  return val;
};


```

# Walk Through

"The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value." MDN

<br>

**Step 1**

We check if the array passed as argument is empty and, if so, early return the init value as required.

<br>

**Step 2**

We decalre a variable val and we assign the value of init to it. Then we loop over the nums array. We update the variable val with the result of the evaluation of the callback function invoked with val and the value of the nums array at the given iteration (item). 

<br>

**Step 3**

Finally we return the val variable that at this point is the reduced result of every item of the nums array passed throug the callback function. 

<br>

# Conclusions

It's mostly how the reduce method works under the hood.


