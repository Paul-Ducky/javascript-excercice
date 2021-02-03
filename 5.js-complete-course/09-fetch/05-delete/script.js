/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click",()=>{
        let idToDel = document.getElementById('hero-id').value;
        async function delHero(){
            let response = await fetch('../../_shared/api.json');
            let data = await response.json();
            data.heroes.splice((idToDel-1),1);
            console.table(data.heroes);
        }
        delHero();
    })
})();
