# Solution

<br>

```
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let init = 0;
  return function (...args) {
    init++;
    if (init === 1) {
      return fn(...args);
    }
  };
};
```

<br>

# Walk through

<br>

That's a easy one if you've been following this 30 days Leetcode JavaScript challenge. 

In order to make a function that can only be called once:
  -  we first declare variable **init** and assign 0 to it in the outer function so that the inner one can have access to it. 
  -  Then, in the inner function we increment the **init** variable to one every time it's called. So the first time it's invoked we can check if **init** is equal to one, if so return the evaluation of the invocation of the **fn** function with the arguments passed to the inner function, return void otherwise (that's what is returned when you no return anything in a function).

<br >

# Conclusions


This could become handy whenever you need to avoid data duplication or initialize a database twice. And even more interesting you can implement a retry on failure logic adding a loop to this function template, that is keep calling the function until a certain condition is met. Sure you better have a backoff logic aswell and that's definetly beyond the scope of this topic.