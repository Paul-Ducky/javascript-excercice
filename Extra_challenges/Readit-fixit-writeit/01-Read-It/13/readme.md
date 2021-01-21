# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
* Look at the documentation of for...in
* Look at the documentation of the .sort() function. Explain how it's applied here.
* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?

###

* the function changed to using a `for...in` loop which iterates over the property names
 while a `for...of` would iterate the property  values. We aren't using `for each` because that is used for the values inside arrays!
 
* 