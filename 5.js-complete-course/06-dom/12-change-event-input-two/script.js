/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let pass = document.getElementById('pass-one');
    let valid = document.getElementById("validity");
    pass.addEventListener('keyup', function(){
        if (pass.value.length >= 8 && pass.value.match(/(?=.*\d){2,}/))
        {
            valid.innerText = "Ok";
        }else
            valid.innerText = "Not Ok"
    });
})();
