function handleSlideShow () {
    console.log("slideshow started")
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'exit');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index + totalSlides - 1) % totalSlides) {
                slide.classList.add('exit');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

/*function solidNavOnScroll(){
    const navbar = document.querySelector('.navbartop');
    if (window.scrollY > 50) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
}

window.addEventListener('scroll', solidNavOnScroll)
solidNavOnScroll()*/

document.addEventListener('load', function () {
    const navbar = document.querySelector('.navbartop');

    function checkScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('solid');
        } else {
            navbar.classList.remove('solid');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check the scroll position on page load
});