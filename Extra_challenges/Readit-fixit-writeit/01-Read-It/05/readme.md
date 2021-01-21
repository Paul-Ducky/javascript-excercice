# READ IT
## Excercise 05
* The for-loop is no longer present. 
  What was it replaced with? How does this work?
* What does the function 'parseTitle' do? 
  What parameter do we pass to this function?
* What does the function 'wrapWithTag' do? 
  Why are the parameters placed between brackets?
  

We changed the `for` loop with the counting into a foreach loop!

this means that for each movie in the movies array we will call the parseTitle function.


The parseTitle function  will change all the characters of the movie title to lowercase and call the wrapWithTag function in order to add 2 `li` tags besides it.

the parameters for the wrapWithTag function are the word you want to add the tags to followed by the tags to add  ==> (example , tag) ==> `<tag>example</tag>`

