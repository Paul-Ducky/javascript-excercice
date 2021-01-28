/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let targetText = document.getElementById("target").innerText;
    let target = document.getElementById("target");
    document.getElementById("target").innerText = "";
    let words = targetText.split('');
    let i = 0;
        words.forEach(function (word) {
            let wrap = document.createElement("span");
            wrap.innerText = word;
            i++
            switch (i){
                case 1:
                    wrap.style.fontSize = '18px';
                    target.appendChild(wrap);console.log(wrap);
                    break;
                case 2:
                    wrap.style.fontSize = '22px';
                    target.appendChild(wrap);console.log(wrap);
                    break;
                case 3:
                    wrap.style.fontSize = '26px';
                    target.appendChild(wrap);console.log(wrap);
                    break;
                case 4:
                    wrap.style.fontSize = '22px';
                    target.appendChild(wrap);console.log(wrap);
                    break;
                case 5:
                    wrap.style.fontSize = '18px';
                    target.appendChild(wrap);console.log(wrap);
                    i = 0;
                    break;
            }
        });
})();