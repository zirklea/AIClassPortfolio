function changeSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll(".carousel-slide");
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));

    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
}
