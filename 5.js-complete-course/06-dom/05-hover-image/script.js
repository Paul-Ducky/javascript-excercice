/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let img = document.getElementsByTagName("img")[0];
    let imgLink = document.getElementsByTagName("img")[0].getAttribute(`data-hover`);
    let startImg = document.getElementsByTagName("img")[0].src
    img.addEventListener("mouseover", function (){
        img.src = imgLink;
    });img.addEventListener("mouseleave", function () {
        img.src = startImg});
})();
