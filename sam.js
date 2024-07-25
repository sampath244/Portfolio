// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address');
        return;
    }
    
    alert('Message sent successfully!');
    
    // Clear the form
    name.value = '';
    email.value = '';
    message.value = '';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
