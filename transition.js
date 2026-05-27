const first = document.getElementById("first");
const nextTransition = document.getElementById("second");
const twilightTransition = document.getElementById("third");

const slides = [first, nextTransition, twilightTransition];
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Show the first slide immediately
showSlide(0);

// Cycle every 8 seconds
setInterval(nextSlide, 8000);