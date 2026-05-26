// Transition for the featured contents
const first = document.getElementById("first");
const nextTransition = document.getElementById("next-transition");
const nextTransition2 = document.getElementById("twilight-transition");




function minionTransition() {
    first.style.display = "block";
    nextTransition.style.display = "none";
}
function sonicTransition() {
    first.style.display = "none";
    nextTransition.style.display = "block";
}
function twilightTransition() {
    nextTransition.style.display = "none";
    nextTransition2.style.display = "block";
}

setInterval(minionTransition, 5000);
setInterval(sonicTransition, 10000);
