// Handle Contact Form Submission 
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

// Get elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
