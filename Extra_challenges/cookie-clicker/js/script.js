let mainSoul = document.getElementById("click-here");
let souls = document.getElementById("current-souls");
let clicks = 0
mainSoul.addEventListener("click", function () {
    clicks += 1;
    souls.value = clicks;
    if (clicks < 2) {
        souls.innerText = `${souls.value} Soul`;
    } else {
        souls.innerText = `${souls.value} Souls`
    }

});
