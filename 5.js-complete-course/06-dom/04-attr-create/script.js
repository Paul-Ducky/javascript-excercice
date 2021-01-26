/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let imageLink = document.getElementById("source").getAttribute(`data-image`);
    let newElement = document.createElement("img");
    let attribute = document.createAttribute("id");
    let attribute2 = document.createAttribute("src");
    attribute.value = "test";
    attribute2.value = imageLink;
    newElement.setAttributeNode(attribute);
    newElement.setAttributeNode(attribute2);
    document.getElementById("target").appendChild(newElement);
    document.getElementById("source").remove();


})();
