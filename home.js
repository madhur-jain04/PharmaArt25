document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("footer");
    const goToFooterButton = document.getElementById("goToFooter");

    goToFooterButton.addEventListener("click", function () {
        footer.scrollIntoView({ behavior: "smooth" });
    });
});

const container = document.querySelector('.product-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let scrollAmount = 0;

leftBtn.addEventListener('click', () => {
    scrollAmount -= container.offsetWidth / 3;
    if (scrollAmount < 0) {
        scrollAmount = container.scrollWidth - container.offsetWidth;
    }
    container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    scrollAmount += container.offsetWidth / 3;
    if (scrollAmount >= container.scrollWidth) {
        scrollAmount = 0;
    }
    container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});


const slides = document.querySelector('.slides');
const prevButton = document.querySelector('#prevslides');
const nextButton = document.querySelector('#nextslides');

let index = 0;

function showSlide(newIndex) {
    const totalSlides = document.querySelectorAll('.slide').length;
    if (newIndex < 0) {
        index = totalSlides - 1; // Loop to the last slide
    } else if (newIndex >= totalSlides) {
        index = 0; // Loop back to the first slide
    } else {
        index = newIndex;
    }
    slides.style.transform = `translateX(-${index * 100}%)`; // Move slides horizontally
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));
