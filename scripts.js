function changeSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll(".carousel-slide");
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));

    // Remove the 'active' class from the current slide
    slides[currentIndex].classList.remove("active");

    // Calculate the new index based on the direction
    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    // Add the 'active' class to the new slide
    slides[currentIndex].classList.add("active");
}
