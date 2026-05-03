// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// ================= BUTTON ACTIONS =================

// Get Started button
document.querySelector('.primary').addEventListener('click', () => {
  alert("🚀 Let's get started!");
});

// View Demo button
document.querySelector('.secondary').addEventListener('click', () => {
  alert("👀 Demo coming soon!");
});

// Contact Us button
document.querySelector('.cta .primary').addEventListener('click', () => {
  alert("📩 Redirecting to contact...");
});


// ================= STICKY NAVBAR =================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background = "#020617";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});