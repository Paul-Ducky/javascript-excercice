/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
        alert( x + y );
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
        alert( x - y );
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
        alert( x * y );
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
        alert( x / y );
    });
})();
