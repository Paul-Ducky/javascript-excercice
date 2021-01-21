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
        for (i=0;i<10;i++){
           let number = Math.floor(Math.random()*100);
            numbers.push(number);
        }
        document.getElementById("n-1").innerHTML = numbers[0]
        document.getElementById("n-2").innerHTML = numbers[1]
        document.getElementById("n-3").innerHTML = numbers[2]
        document.getElementById("n-4").innerHTML = numbers[3]
        document.getElementById("n-5").innerHTML = numbers[4]
        document.getElementById("n-6").innerHTML = numbers[5]
        document.getElementById("n-7").innerHTML = numbers[6]
        document.getElementById("n-8").innerHTML = numbers[7]
        document.getElementById("n-9").innerHTML = numbers[8]
        document.getElementById("n-10").innerHTML = numbers[9]

        let smallest = Math.min(numbers);
        let biggest = Math.max(numbers);
        let sum = numbers.reduce((x,y) => x + y, 0);
        let average = numbers.reduce((x,y) => x + y, 0) / numbers.length;

        document.getElementById("min").innerHTML = smallest;
        document.getElementById("max").innerHTML = biggest;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;
    });


})();
