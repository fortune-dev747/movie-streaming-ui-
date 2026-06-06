// Arrow Sliders
const rightArrows = document.querySelectorAll(".right");
const leftArrows = document.querySelectorAll(".left");
const movieLists = document.querySelectorAll(".movie-list");

const clickCounters = Array(movieLists.length).fill(0);
const currentPositions = Array(movieLists.length).fill(0); // track position manually

rightArrows.forEach((arrow, index) => {
    const itemNumber = movieLists[index].querySelectorAll("img").length;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounters[index]++;
        if (itemNumber - (5 + clickCounters[index]) + (5 - ratio) >= 0) {
            currentPositions[index] -= 300;
            movieLists[index].style.transform = `translateX(${currentPositions[index]}px)`;
        } else {
            currentPositions[index] = 0;
            movieLists[index].style.transform = "translateX(0)";
            clickCounters[index] = 0;
        }
    });
});

leftArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        if (currentPositions[index] < 0) {
            currentPositions[index] += 300;
            movieLists[index].style.transform = `translateX(${currentPositions[index]}px)`;
            clickCounters[index]--;
        }
    });
});

// Dark Mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.sidebar-menu-icon,.left-menu-icon,.toggle,.nav-toggle,.mobile-menu-list-item"
);
ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu-container");
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
