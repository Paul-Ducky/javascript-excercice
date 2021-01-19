/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let date = new Date();
    let hournow = date.getHours();
    let minutesnow = date.getMinutes();
    if ( hournow >17){
        // for all hours after 17!
        console.log("Good evening!");
        document.getElementById('target').innerHTML = "Good evening!";
    } else if(hournow <17) {
        // for hours before 17
        console.log("Hello!");
        document.getElementById('target').innerHTML = "Hello!";
    } else if (hournow === 17 && minutesnow === 30){
        // logs good evening at 17.30 exactly
        console.log('its exactly 17.30!')
        document.getElementById('target').innerHTML = "Good evening!"
    } else if (hournow === 17 && minutesnow >30){
    // logs good evening after 17.30
    console.log("good evening");
    document.getElementById('target').innerHTML = "Good evening!";
    } else if (hournow === 17 && minutesnow <30){
    // logs hello up to 17.29
    console.log("Hello!");
    document.getElementById('target').innerHTML = "Hello!";
    }
})();
