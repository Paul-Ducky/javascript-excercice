# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
* Look at the documentation of for...in
* Look at the documentation of the .sort() function. Explain how it's applied here.
* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?

###

* the function changed to using a `for...in` loop which iterates over the property names
 while a `for...of` would iterate the property  values. We aren't using `for each` because that is used for the values inside arrays!
 
* the `.sort()` has been used to sort the movies from earliest to latest by looking at the property year.

* `console.table()` will show a nice table using the index, and the properties of objects in the array.
`console.log()` will show the raw not-so structured data inside the array of objects.
  
the reason for the difference between ex10 and 13(this one) is that in ex10 we weren't handling an array of objects yet!