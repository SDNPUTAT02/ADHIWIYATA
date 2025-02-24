let slideIndex = 0;
document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');
    
    slideIndex = (slideIndex + slides.length) % slides.length;
    slides[slideIndex].style.display = 'block';
    
    setTimeout(() => {
        slideIndex++;
        showSlides();
    }, 20000); // Slide otomatis berganti setiap 4 detik
}

document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));
