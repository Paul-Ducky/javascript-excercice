/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let btnOne = document.getElementById("part-one");
    let btnTwo = document.getElementById("part-two");
    let btnThree = document.getElementById("part-three");
    let btnFour = document.getElementById("part-four");
    let target = document.getElementById("target");
    function update(){
        target.innerText = "0"+btnOne.innerText+btnTwo.innerText+btnThree.innerText+btnFour.innerText;
    }
    btnOne.addEventListener("click",function (){
        btnOne.innerText = String((parseInt(btnOne.innerText)+1));
        if(btnOne.innerText>btnOne.getAttribute("data-max")){
            btnOne.innerText = btnOne.getAttribute("data-min");
        } update();
    });
    btnTwo.addEventListener("click",function (){
        btnTwo.innerText = String((parseInt(btnTwo.innerText)+1));
        if(parseInt(btnTwo.innerText)<10){
            btnTwo.innerText = "0"+btnTwo.innerText;
        }
        if(btnTwo.innerText>btnTwo.getAttribute("data-max")){
            btnTwo.innerText = btnTwo.getAttribute("data-min");
        } update();
    });
    btnThree.addEventListener("click",function (){
        btnThree.innerText = String((parseInt(btnThree.innerText)+1));
        if(parseInt(btnThree.innerText)<10){
            btnThree.innerText = "0"+btnThree.innerText;
        } update();
        if(btnThree.innerText>btnThree.getAttribute("data-max")){
            btnThree.innerText = btnThree.getAttribute("data-min")
        } update();
    });
    btnFour.addEventListener("click",function (){
        btnFour.innerText = String((parseInt(btnFour.innerText)+1));
        if(parseInt(btnFour.innerText)<10){
            btnFour.innerText = "0"+btnFour.innerText;
        } update();
        if(btnFour.innerText>btnFour.getAttribute("data-max")){
            btnFour.innerText = btnFour.getAttribute("data-min");
        } update();
    });
})();
