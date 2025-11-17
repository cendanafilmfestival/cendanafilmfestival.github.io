document.addEventListener("DOMContentLoaded", () => {
    console.log("Document is ready");
    const navbar = document.querySelector(".navbar");
    const showNavOnScroll = 200;
  
    // Get the scroll container
    const scrollContainer = document.querySelector("body");
  
    // Listen to scroll events on the scroll container
    scrollContainer.addEventListener("scroll", () => {
      const scrollPosition = scrollContainer.scrollTop;
      console.log("Scroll position: ", scrollPosition);  // Check the scroll position
  
      if (scrollPosition > showNavOnScroll) {
        navbar.style.transform = "translateY(0)";  // Show the navbar
      } else {
        navbar.style.transform = "translateY(-100%)";  // Hide the navbar
      }
    });
  });


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

console.log("JavaScript is running");  // Check if the script is executed
