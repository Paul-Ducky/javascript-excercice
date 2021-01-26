/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target");
    let btn = document.getElementById("increment");
    target.innerText = localStorage.counter;

    btn.addEventListener("click",function (){
        if(typeof(Storage) !== "undefined") {
            if (localStorage.counter) {
                localStorage.counter = Number(localStorage.counter) + 1;
            } else {
                localStorage.counter = 0;
            }
        }
    });

})();
