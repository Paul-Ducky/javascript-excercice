/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
    // get the current yy/mm/dd
    let fulldatenow = new Date();
    let yearnow = fulldatenow.getFullYear();
    let monthnow = (fulldatenow.getMonth()+1);
    let daynow = fulldatenow.getDate();
    // collect user-input
    let yearborn = document.getElementById("dob-year").value;
    let monthborn = document.getElementById("dob-month").value;
    let dayborn = document.getElementById("dob-day").value;
    // do the maths
        console.log(monthborn+" month born")
        console.log(monthnow+" month now")
        console.log(dayborn+" day born")
        console.log(daynow+" day now")
        console.log(yearborn+" year born")
        console.log(yearnow+" year now")
    let currentage = yearnow - yearborn
        if (monthborn == monthnow && dayborn == daynow){
            alert("Happy birthday! congratulations on your "+(currentage)+"th birthday!");
        }else if (monthborn == monthnow && daynow > dayborn){
            alert("Your age is "+(currentage));
        }else if (monthnow == monthborn && daynow < dayborn){
            alert("Your age is "+(currentage-1));
        }else if (monthnow < monthborn){
            alert("Your age is "+(currentage-1));
        }
    });
})();
