let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".carousel-slide");
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
}
