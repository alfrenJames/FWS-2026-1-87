// Typewriter Effect for the Hero Subtitle
const statement = "code geek, technology enthusiast, programming guru";
const typewriterElement = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
    if (i < statement.length) {
        typewriterElement.innerHTML += statement.charAt(i);
        i++;
        // Adjust typing speed here (50ms)
        setTimeout(typeWriter, 50); 
    }
}

// Start the typing animation once the window loads
window.onload = () => {
    // Add a slight delay before typing starts
    setTimeout(typeWriter, 1000); 
};

// Handle Contact Form Submission (Prevent page refresh for SPA feel)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default browser refresh
    
    // In a real scenario, you'd send data to a backend or EmailJS here.
    const name = document.getElementById('name').value;
    alert(`Thanks for reaching out, ${name}! This form is currently a template placeholder.`);
    
    // Clear the form
    contactForm.reset();
});


// --- Dark/Light Mode Toggle Logic ---

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// 1. Check if the user previously saved a theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// 2. Handle the click event
themeToggle.addEventListener('click', () => {
    // Add a quick full rotation to the icon for visual flair
    themeIcon.style.transform = "rotate(360deg)";
    
    // Reset the rotation after the animation finishes so it can spin again next time
    setTimeout(() => {
        themeIcon.style.transition = "none";
        themeIcon.style.transform = "rotate(0deg)";
        setTimeout(() => themeIcon.style.transition = "transform 0.5s ease, color 0.3s ease", 50);
    }, 500);

    // Toggle the class on the body
    document.body.classList.toggle('light-mode');
    
    // Update the icon and save to local storage
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// --- Mobile Menu Toggle Logic ---

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// 1. Toggle menu when clicking the hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 2. Close the menu when a specific link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

