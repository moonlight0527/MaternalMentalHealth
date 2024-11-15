const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the nav-links when the hamburger is clicked
    navLinks.classList.toggle('active');
});

