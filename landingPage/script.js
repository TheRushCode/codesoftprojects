// 1. Sticky Navigation Bar Effect
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    // Toggles the "scrolled" class when page is scrolled down 50px
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// 2. Scroll Reveal Animation (Intersection Observer)
// This API detects when elements enter the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add CSS class to trigger animation
        }
    });
});

// Select all elements with the class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Tell the observer to watch all hidden elements
hiddenElements.forEach((el) => observer.observe(el));



// 3. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;


const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; 
    
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});









// --- EMAILJS INTEGRATION ---

// 1. Initialize EmailJS with your Public Key

(function() {
    emailjs.init("O-d_iX2B2LzSgv8kf");
})();

// 2. Add Event Listener to the Form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const btn = document.getElementById('submit-btn');
    const originalText = btn.innerText;
    btn.innerText = 'Sending...';

    // 3. Send the Form

    emailjs.sendForm('service_7epxcte', 'template_26bw39x', this)
        .then(function() {
            // Success!
            alert('Message Sent Successfully!');
            btn.innerText = originalText;
            document.getElementById('contact-form').reset(); // Clear the form
        }, function(error) {
            // Error!
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
            btn.innerText = originalText;
        });
});

