// Typing Animation
const typingTextElement = document.getElementById('typing-text');
const words = ['Web Developer', 'Frontend Developer', 'Cybersecurity Learner'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const typingSpeed = isDeleting ? 50 : 150;
    setTimeout(type, typingSpeed);
}

// Dark/Light Mode Toggle
const checkbox = document.getElementById('checkbox');
const body = document.body;

// Load user preference from localStorage
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light-mode') {
    body.classList.add('light-mode');
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initial function call
document.addEventListener('DOMContentLoaded', type);







