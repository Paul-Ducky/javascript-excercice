# READ IT
## EX 08
* Look at the documentation of the join() function. Explain how it is used here.

The join() method here is used to turn the entire array into a single string. However, doing this adds a `,` after every element inside the array : `<li>"moviename"</li>,`
So using double accent grave ` ' ` `join('')` makes sure the commas are not there. Resulting in a nice clean list!