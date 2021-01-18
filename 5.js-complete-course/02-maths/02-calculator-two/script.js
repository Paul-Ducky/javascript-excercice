/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let x = parseInt(document.getElementById("op-one").value);
    let y = parseInt(document.getElementById("op-two").value);
    let operation = document.getElementById("")

    var performOperation = function(operation) {
        // perform the operation
        switch () {
            case document.getElementById("addition"):
                alert(x+y)
                break;
            case document.getElementById("subtraction"):
                alert(x-y)
                break;
            case document.getElementById("multiplication"):
                alert(x*y)
                break;
            case document.getElementById("division"):
                alert(x/y)
                break;
        }
    };
    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
