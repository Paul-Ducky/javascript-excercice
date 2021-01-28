/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let display = document.getElementById("target");
    let inputs = document.querySelectorAll("input");

    document.querySelectorAll("button").forEach((button, index) => {
        let input = inputs[index];
        let number = input.dataset.min;

        let interval = setInterval(function() {
            number = numberSpinner(input, number);
        }, 50);

        button.addEventListener("click", function () {
            clearInterval(interval);
        })
    });

    setInterval(function() {
        let output = '0';
        inputs.forEach(element => {
            output += element.value.toString().padStart(element.dataset.min.length, '0');
        });
        display.innerHTML = output;
    }, 50);

    function numberSpinner(input, number) {
        input.value = number.toString();
        number++;
        if (number >= input.dataset.max){
            number = input.dataset.min;
        }

        input.value = number;
        return number;
    }
})();