/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let i = 0;
    let targetText = document.getElementById('target').innerText;
    document.getElementById('target').innerText = ''
    let delay = 85; // set to 5 for speed-writer :D
    function typeWriterEffect() {
        if (i < targetText.length) {
            document.getElementById("target").innerHTML += targetText.charAt(i);
            i++;
            setTimeout(typeWriterEffect, delay);
        }
    }
    typeWriterEffect();
})();
