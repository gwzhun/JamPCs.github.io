
// --------------- Slideshow ---------------

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slideshow-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const indicators = document.querySelectorAll(".indicator");

    let slideIndex = 0;
    let slideshowInterval;

    // Display the first slide and activate the first indicator
    showSlide(slideIndex);

    // Function to show a specific slide with a "transform translate" transition
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.transform = "translateX(0%)"; // Show current slide
            } else {
                slide.style.transform = "translateX(100%)"; // Slide offscreen to the right
            }
        });

        indicators.forEach((indicator) =>
            indicator.classList.remove("active")
        );

        indicators[index].classList.add("active");
    }

    // Function to go to the next slide
    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
    }

    // Event listeners for next and previous buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Event listener for indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            slideIndex = index;
            showSlide(slideIndex);
            clearInterval(slideshowInterval);
            startSlideshow();
        });
    });

    // Event listener to pause on mouseenter
    document.querySelector(".slideshow-container").addEventListener("mouseenter", () => {
        clearInterval(slideshowInterval);
    });

    document.querySelector(".slideshow-indicator").addEventListener("mouseenter", () => {
        clearInterval(slideshowInterval);
    });

    // Event listener to resume on mouseleave
    document.querySelector(".slideshow-container").addEventListener("mouseleave", () => {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(nextSlide, 3500); // Change slide every n milliseconds
    });

    document.querySelector(".slideshow-indicator").addEventListener("mouseleave", () => {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(nextSlide, 3500); // Change slide every n milliseconds
    });

    // Automatically start the slideshow
    slideshowInterval = setInterval(nextSlide, 3500); // Change slide every n milliseconds

});

// --------------- Scroll ---------------

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".scroll");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

// --------------- Reviews ---------------

document.addEventListener("DOMContentLoaded", function () {
    let currentOffset = 0;
    const itemsPerPage = 3;
    const reviewsContainer = document.querySelector('.reviews');
    const reviewItems = document.querySelectorAll('.review');

    function showReviews() {
        const itemWidth = 33.33; // 33.33% for each item
        const containerWidth = itemsPerPage * itemWidth;
        const spacing = (100 - containerWidth) / (itemsPerPage - 1);
        const translateX = -currentOffset * (itemWidth + spacing);
        reviewsContainer.style.transform = `translateX(${translateX}%)`;
    }

    function prevReview() {
        if (currentOffset > 0) {
            currentOffset--;
            showReviews();
        }
    }

    function nextReview() {
        if (currentOffset < reviewItems.length - itemsPerPage) {
            currentOffset++;
            showReviews();
        }
    }

    showReviews();

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.addEventListener('click', prevReview);
    nextBtn.addEventListener('click', nextReview);
});