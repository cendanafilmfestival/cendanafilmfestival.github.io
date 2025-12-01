

// Click to scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
});

const INTERVAL_TIME = 5000; // 3000ms = 3 seconds

// Select DOM elements
const images = document.querySelectorAll('.bg');
const textItems = document.querySelectorAll('.credits');

let currentIndex = 0;
let slideInterval;

// Function to switch content based on index
function setActiveSlide(index) {
    // 1. Remove 'active' class from all images and text
    images.forEach(img => img.classList.remove('active'));
    textItems.forEach(text => text.classList.remove('active'));

    // 2. Add 'active' class to the specific index
    images[index].classList.add('active');
    textItems[index].classList.add('active');
    
    // Update global index
    currentIndex = index;
}

// Function to start the automatic timer
function startTimer() {
    slideInterval = setInterval(() => {
        // Calculate next index (loops back to 0 if at end)
        let nextIndex = (currentIndex + 1) % images.length;
        setActiveSlide(nextIndex);
    }, INTERVAL_TIME);
}

// Function to stop the timer (used when hovering)
function stopTimer() {
    clearInterval(slideInterval);
}

// Initialize Event Listeners
textItems.forEach((item, index) => {
    // When mouse enters a text item
    item.addEventListener('mouseenter', () => {
        stopTimer(); // Stop auto-rotation so user can read
        setActiveSlide(index); // Immediately switch to this item
    });

    // When mouse leaves the text item
    item.addEventListener('mouseleave', () => {
        startTimer(); // Restart the auto-rotation
    });
});

// Start the loop on load
startTimer();

console.log("JavaScript is running");  // Check if the script is executed
