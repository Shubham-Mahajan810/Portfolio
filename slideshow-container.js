let currentSlideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}

function changeSlide(step) {
    currentSlideIndex += step;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
}

function autoSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
    setTimeout(autoSlide, 8000); // Change slide every 8 seconds
}

// Initialize slideshow
showSlide(currentSlideIndex);
setTimeout(autoSlide, 8000);
