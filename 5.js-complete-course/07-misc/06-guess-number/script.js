/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let number = Math.floor(Math.random()*10);
    // your code here
    let count = 1;
    function highLow(){

        let guess = prompt("guess the number between 1 - 100!");
            guess = parseInt(guess)


            if (guess === number){
                alert("Congratulations you only needed "+count+" tries");
            }else if (guess > number){
                count++
                alert("too high");
            }else{
                count++
                alert("too low");
            }
            highLow()
    }
    highLow()
})();
