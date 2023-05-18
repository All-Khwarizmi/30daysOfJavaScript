# Solution

```
type F = (x: number) => number | null;

function compose(functions: F[]): F {

    let arrFn: F[] = functions;

  return function composition(x: number) {

    if (!functions.length) return x;

    if (!arrFn.length) return;

    const func = arrFn.pop();

    return composition(func(x));
  };
};

```

<br>

# Walk through

Whenever I face a problem involving iterating over a given number of functions, and as crazy as it might sound, the first thing to come to my mind is **recursion**.

Using the callstack to "loop" over the array of functions not only allow us to write less code, but also to not have to take care of the calling logic in the for loop implementation.

And if you combine this powerful concept with another as powerful, closures, to serve as base case to stop recursing, you end up with an elegant and easy to read solution.

<br>

**Step 1**

Initialize variable copying the arrray of functions.
This will be closed over (closure) by the inner function "composition".


**Step 2**

The inner function which is returned has access to the function excution context from the outer one, that is all the variables, i.e. "arrFn".

**Step 3**

 This function will recursively call itself, iterating over all the functions using the call stack as data structure. 


    Whenever you use recusion you MUST have a base case to stop recursing

   - The first condition covers the following requirement from the exercice : The function composition of an empty list of functions is the identity function f(x) = x

```
    if (!functions.length) return x;
```
   - This is our base case to stop recursing  

```
    if (!arrFn.length) return;
```

**Step 4**

Make sure to remove the last function of the arrFn so that you execute from right to left and allow the base case to happen when the array is empty.


**Step 6**

Recursive call of the function "composition" with, as argument, the evaluation of the last function in the array invoked with the argument **x**. 

<br>

# Conclusions

The compose function acts like a reducer that can handle multiple callback functions.