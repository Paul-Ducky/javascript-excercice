/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    console.log('start');
    document.getElementById("run").addEventListener("click",()=>{
       async function gatherposts(result){
           result = await window.lib.getPosts();
           return result
       }
        console.log(gatherposts());
    });
})();
