/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        // your code here
        let result = 0;
        let i = 1;

        while (result <=21){
            result = Math.pow(i, 2);
            if (result <21){
                i += 1;
                alert(result);
            }
        }



    });
})();




