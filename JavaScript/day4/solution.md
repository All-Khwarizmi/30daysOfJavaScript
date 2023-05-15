# Solution 

```
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
  const len = arr.length;
  let copyArr = [];
  for (let idx = 0; idx < len; idx++) {
    copyArr.push(fn(arr[idx], idx));
  }

  return copyArr;
};

```
<br>

# Walk Through

We need to iterate over an array, and apply a function to each item of the array without using the Array.map method.

<br>

That implies to main things:
- That the time complexity will be at least **0(n)**
- We need to implement the Array.map method by ourselves since the requirements of the exercice match with the description of Array.map.

<br>

**Step 1: set up variables to loop over the array**

- We declare a constant **len** and assign the value of the length of the array given as the first argument to it. That way we execute that operation only once.
- We declare a variable **copyArr** and assign an empty array to it. We will be storing the modified values in it.

**Step 2: For loop over the *arr* array**

- We declare a **idx** variable that we initialize to 0 and we iterate over the **arr** array as long as **idx** is less than **len**.
- In the body of the for loop we push to the **copyArr** array the evaluation of the **callback** function called with the value of the **arr** array at the **idx** position and **idx** as arguments. That is we apply the callback function to each member of the array and add the return value to the copyArr at the same index.
- We sum 1 to **idx** before the next iteration.

**Step 3: Return the copyArr**

<br>

# Conclusions

That's how the Array.map method works under the hood.