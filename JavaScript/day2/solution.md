
# Solution 

```
/**
 * @param {number} n
 * @return {Function} counter
 */
module.exports.createCounter = function (n) {
  return function () {
    return n++;
  };
};

```

# Walk Through

Nothing fancy just yet either. 
However, I will never forget the first time I realized how the **++** operator really works. 

<br> 

Here one might think that the inner function returned by createCounter will not return *n* the first time it's invoked but n++, that is **n + 1** or **n +=1**. They all work the same, right? 

<br>

Not quite. There's a subtle but powerful difference between these expressions.

- n += 1 and n+1 are equivalent and will be evaluated to the result of the sum of *n + 1*, in place, immediately, and thus would not work for us here. 
- As you might have guessed, here *n* is returned before the operation **n++** it's executed and the argument *n* (which belongs to the function exuction context of the outer anonymous function, a closure,) is modified and kept in memory for whenever the inner function is invoked angain.

<br>

In conclusion. Thanks to this *asynchronus* behavior of the **++** operator we can solve simply but yet elagantly this exercice.
