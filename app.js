
// slider
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
    const itemNumber = movieLists[index].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber - (5 + clickCounter) + (5 - ratio) >= 0) {
            movieLists[index].style.transform = `translateX(${movieLists[index].computedStyleMap().get("transform")[0].x.value-300}px)`;
        } else {
           movieLists[index].style.transform = "translateX(0)";
           clickCounter = 0;
        }
    })
});

// Dark Mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.sidebar-menu-icon,.left-menu-icon,.toggle"
);
ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});

// Mobile Menu Toggle
