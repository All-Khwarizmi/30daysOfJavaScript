# Solution 

```
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
module.exports.createCounter = function (init) {
  let bag = init;

  function Obj() {
    this.increment = () => (bag += 1);
    this.decrement = () => (bag -= 1);
    this.reset = () => (bag = fixedInit);
  }
  return new Obj();
};


```

# Walk Through

Ok. I there's a lot to cover here.
- Firstofall, we declare a constant to store the argument value (**init**). We did not in the previous exercice for the elegance sake. Here though we start applying some good practices, normal ones in functional programming btw, avoid side effects. That is modify a variable from outside of the outer function that wraps the inner one and allow to have a closure that is key here.
- We could use the ES6 way of using a function constructor, that is a **class**, yet we used the ES5 way. They are mostly the same. And this exercice is about functions anyway. 
- Right. We need a closure to store and modify a value in between function calls. A closure is like a backpack that the inner function gets when it's returned from the outer one. A backpack that contains whichever the inner function makes reference to, that's how the JavaScript engine knows what to keep and what not.
- Notice the **new** keyword. Obj() is a constructor, a special kind of function that allows to create new objects. Like a class which is a template for creating an object aswell. That's why we must use the **new** keyword to instantiate a brand new object with its personal backpack. 

<br>

In conclusion, in programming there's always many ways to do things. JavaScript went to far though. Here we could have used a **class** and even an object litteral. 

```
const createCounter = function (init) {
  let bag = init;

  return {
    increment: () => (bag += 1),
    decrement: () => (bag -= 1),
    reset: () => (bag = init),
  };
};
```
