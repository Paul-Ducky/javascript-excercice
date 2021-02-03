/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {
        let name = document.getElementById('hero-name').value;
        let alterEgo = document.getElementById('hero-alter-ego').value;
        let abilities = [document.getElementById('hero-powers').value];
        let id = 6

        async function addNewHero() {
            let response = await fetch('../../_shared/api.json')
            let data = await response.json();

            let newHero = {id, name, alterEgo, abilities}

            console.table(data.heroes)
            data.heroes.push(newHero)
            console.table(data.heroes)
        }
        addNewHero();
    });
})();


let object = {   key:keyvalue   }