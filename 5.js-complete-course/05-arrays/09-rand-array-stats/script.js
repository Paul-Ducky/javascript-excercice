/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click",function(){

        let numbers = [];
        for (let i=0;i<10;i++){
           let number = Math.floor(Math.random()*100);
            numbers.push(number);
        }
        document.getElementById("n-1").innerText = numbers[0]
        document.getElementById("n-2").innerText = numbers[1]
        document.getElementById("n-3").innerText = numbers[2]
        document.getElementById("n-4").innerText = numbers[3]
        document.getElementById("n-5").innerText = numbers[4]
        document.getElementById("n-6").innerText = numbers[5]
        document.getElementById("n-7").innerText = numbers[6]
        document.getElementById("n-8").innerText = numbers[7]
        document.getElementById("n-9").innerText = numbers[8]
        document.getElementById("n-10").innerText = numbers[9]

        let smallest = String(Math.min(...numbers));
        let biggest = String(Math.max(...numbers));
        let sum = numbers.reduce((x,y) => x + y, 0);
        let average = String(numbers.reduce((x,y) => x + y, 0) / numbers.length);

        document.getElementById("min").innerText = smallest;
        document.getElementById("max").innerText = biggest;
        document.getElementById("sum").innerText = sum;
        document.getElementById("average").innerText = average;
    });

})();
