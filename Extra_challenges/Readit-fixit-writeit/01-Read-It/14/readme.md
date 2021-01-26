# READ IT
## EX 14
* Look at the reduce() function and research how it works exactly.
* Notice the ', 0' in the reduce function. Inspect the result when you omit this. Explain the difference.
* What are we doing with the object that's passed to 'calculateAvailable'?

#
* `sum = array.reduce((sum,object) => sum + object.property, starting value)` this is how the `.reduce()`works in this exercise. It will sum-up starting from 0 which was entered as the starting point `.reduce((x,y) => x+y, 0)` the additions are stored in `x` while `y`is the number that gets added every iteration.
* if you omit the starting value 0, you will start adding objects with value's which will give very strange results `[object Object]250150100`

* in the calculateAvailable function we are looking at the capacity and occupied properties to find out how many open space is still available, which we then store inside a new property! 


