/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var check = false;
while (check === false){

    if (check === false){
        let age = prompt("how old are you?");
        let gender = prompt("are you a boy or a girl? ♫pokemon tune♪");
        let town = prompt("where do you live?");
        check = confirm("are these correct? " + age + " " + gender + " " + town);
        if (check === false){
            alert('please confirm')
        }else {
            alert("Confirmed!")
        }
    }
}