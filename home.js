const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

// Function to update the active slide
function showSlide(index) {
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;

  // Update active dot
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}

// Function to go to the next slide automatically
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
  showSlide(currentSlide);
}

// Set up automatic scrolling
let autoScroll = setInterval(nextSlide, 1000); // Change slide every 3 seconds

// Pause automatic scrolling when mouse enters the slider
const slider = document.querySelector(".hero-slider");
slider.addEventListener("mouseenter", () => clearInterval(autoScroll));

// Resume automatic scrolling when mouse leaves the slider
slider.addEventListener("mouseleave", () => {
  autoScroll = setInterval(nextSlide, 3000);
});

// Initialize the first slide
showSlide(currentSlide);
