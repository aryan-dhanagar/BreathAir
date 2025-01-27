// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();
        const message = event.target.message.value.trim();

        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill out all the fields before submitting.');
        }
    });
}
