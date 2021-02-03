/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let target = document.getElementById('target');
        let url = '../../_shared/api.json'

        async function findHeroes() {
            let response = await fetch(url);
            let data = await response.json();
            console.table(data)
            data.heroes.forEach(hero => {

                // set-up the clone of the template -- this has to be inside the foreach!
                let clone = document.getElementById("tpl-hero").content.cloneNode(true)
                if (Number(document.getElementById("hero-id").value) === hero.id) {

                    // Clone the hero stuff and insert it into the template
                    clone.querySelector(".name").textContent = hero.name;
                    clone.querySelector(".alter-ego").textContent = hero.alterEgo;
                    clone.querySelector(".powers").textContent = hero.abilities.join(", ");
                    target.appendChild(clone)
                }

            });
        }
        findHeroes();
    });
})();