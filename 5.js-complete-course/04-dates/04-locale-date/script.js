/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // get the current yy/mm/dd
    let fulldatenow = new Date();
    let nicedate = fulldatenow.toDateString()
    let nicehour = fulldatenow.getHours()
    let niceminutes = fulldatenow.getMinutes()
    //input the nice date
    document.getElementById('target').innerHTML = (nicedate +" "+nicehour+":"+niceminutes)

})();