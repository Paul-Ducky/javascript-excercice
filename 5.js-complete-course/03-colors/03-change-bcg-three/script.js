/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {

    let test = Math.random()*87654321;
    let test2 = Math.floor(test);
    let test3 = test2.toString(16)
    let randomColor = Math.floor(Math.random()*8654321).toString(16); // the *8654321 is random to get a big(ger) number
    console.log(test);
    console.log(test2);
    console.log(test3);
    console.log(randomColor); // color code missing hash
    document.body.style.backgroundColor = ('#'+randomColor);
    });
})();
