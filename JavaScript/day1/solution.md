# Solution 

```
/**
 * @return {Function}
 */
module.exports.createHelloWorld = function () {
  return function (...args) {
    return 'Hello World';
  };
};

```

# Walk Through

Nothing fancy just yet. 
  The outer function returns a functions that itself always returns a string.