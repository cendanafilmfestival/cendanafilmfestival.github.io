const navbar = document.getElementById("navbar");
const showNavOnScroll = 800; // Change to the scroll point where you want the navbar to appear

window.addEventListener("scroll", () => {
  if (window.scrollY > showNavOnScroll) {
    navbar.style.transform = "translateY(0)";
  } else {
    navbar.style.transform = "translateY(-100%)";
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  