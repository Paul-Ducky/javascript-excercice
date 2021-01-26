/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // collecting the number fields
    let partOne = document.getElementById("part-one");
    let partTwo = document.getElementById("part-two");
    let partThree = document.getElementById("part-three");
    let partFour = document.getElementById("part-four");
    let target = document.getElementById("target");
    // collecting the stop buttons
    let stopOne = document.getElementById("fix-part-one");
    let stopTwo = document.getElementById("fix-part-two");
    let stopThree = document.getElementById("fix-part-three");
    let stopFour = document.getElementById("fix-part-four");


    let spinner1 = setInterval(spinToWin1,15)
    let spinner2 = setInterval(spinToWin2,15)
    let spinner3 = setInterval(spinToWin3,15)
    let spinner4 = setInterval(spinToWin4,15)
    function spinToWin1() {
        partOne.value = parseInt(partOne.value)+1;
        if(partOne.value<10){
            partOne.value = "0"+parseInt(partOne.value);
        }
        if (parseInt(partOne.value)>partOne.getAttribute("data-max")){
            partOne.value = partOne.getAttribute("data-min");
        }
    }
    function stopSpinner1(){
        clearInterval(spinner1)
    }
    function spinToWin2() {
        partTwo.value = parseInt(partTwo.value)+1;
        if(partTwo.value<10){
            partTwo.value = "0"+parseInt(partTwo.value);
        }
        if (parseInt(partTwo.value)>partTwo.getAttribute("data-max")){
            partTwo.value = partTwo.getAttribute("data-min");
        }
    }
    function stopSpinner2(){
        clearInterval(spinner2)
    }
    function spinToWin3() {
        partThree.value = parseInt(partThree.value)+1;
        if(partThree.value<10){
            partThree.value = "0"+parseInt(partThree.value);
        }
        if (parseInt(partThree.value)>partThree.getAttribute("data-max")){
            partThree.value = partThree.getAttribute("data-min");
        }
    }
    function stopSpinner3(){
        clearInterval(spinner3)
    }
    function spinToWin4() {
        partFour.value = parseInt(partFour.value)+1;
        if(partFour.value<10){
            partFour.value = "0"+parseInt(partFour.value);
        }
        if (parseInt(partFour.value)>partFour.getAttribute("data-max")){
            partFour.value = partFour.getAttribute("data-min");
        }
    }
    function stopSpinner4(){
        clearInterval(spinner4)
    }
    stopOne.addEventListener("click",function(){
       stopSpinner1();
        target.innerText = "0"+partOne.value+partTwo.value+partThree.value+partFour.value;
    });
    stopTwo.addEventListener("click",function(){
        stopSpinner2();
        target.innerText = "0"+partOne.value+partTwo.value+partThree.value+partFour.value;
    });
    stopThree.addEventListener("click",function(){
        stopSpinner3();
        target.innerText = "0"+partOne.value+partTwo.value+partThree.value+partFour.value;
    });
    stopFour.addEventListener("click",function(){
        stopSpinner4();
        target.innerText = "0"+partOne.value+partTwo.value+partThree.value+partFour.value;
    });
})();