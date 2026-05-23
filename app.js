const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        movieLists[index].style.transform = "translateX(-100px)";
    })
})