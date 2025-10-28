
const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const validationMessage = document.getElementById('validationMessage');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email.toLowerCase());
}

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    validationMessage.textContent = '';
    validationMessage.className = '';

    if (emailValue === '') {
        validationMessage.textContent = 'Error: The email field is required.';
        validationMessage.classList.add('error');
        emailInput.focus();
        return;
    }

    if (!isValidEmail(emailValue)) {
        validationMessage.textContent = 'Error: Please enter a valid email address (e.g., user@domain.com).';
        validationMessage.classList.add('error');
        emailInput.focus();
        return;
    }

    validationMessage.textContent = 'Success! Your message has been sent (Form submitted successfully).';
    validationMessage.classList.add('success');
 
    setTimeout(() => {
        contactForm.reset();
        validationMessage.textContent = '';
        validationMessage.className = '';
    }, 3000);
});