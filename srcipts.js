

// Project filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Contact form real-time validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const projectTypeInput = document.getElementById('projectType');
        const messageInput = document.getElementById('message');

        // Validation rules
        const validationRules = {
            firstName: {
                input: firstNameInput,
                errorElement: document.getElementById('firstNameError'),
                validate: function(value) {
                    if (!value.trim()) {
                        return 'First name is required';
                    }
                    if (value.trim().length < 2) {
                        return 'First name must be at least 2 characters';
                    }
                    if (!/^[a-zA-Z\s'-]*$/.test(value)) {
                        return 'First name can only contain letters, spaces, hyphens, and apostrophes';
                    }
                    return '';
                }
            },
            lastName: {
                input: lastNameInput,
                errorElement: document.getElementById('lastNameError'),
                validate: function(value) {
                    if (!value.trim()) {
                        return 'Last name is required';
                    }
                    if (value.trim().length < 2) {
                        return 'Last name must be at least 2 characters';
                    }
                    if (!/^[a-zA-Z\s'-]*$/.test(value)) {
                        return 'Last name can only contain letters, spaces, hyphens, and apostrophes';
                    }
                    return '';
                }
            },
            email: {
                input: emailInput,
                errorElement: document.getElementById('emailError'),
                validate: function(value) {
                    if (!value.trim()) {
                        return 'Email address is required';
                    }
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        return 'Please enter a valid email address';
                    }
                    return '';
                }
            },
            phone: {
                input: phoneInput,
                errorElement: document.getElementById('phoneError'),
                validate: function(value) {
                    if (value && !/^\d{10,}$/.test(value.replace(/\D/g, ''))) {
                        return 'Please enter a valid phone number (at least 10 digits)';
                    }
                    return '';
                }
            },
            projectType: {
                input: projectTypeInput,
                errorElement: document.getElementById('projectTypeError'),
                validate: function(value) {
                    if (!value) {
                        return 'Project type is required';
                    }
                    return '';
                }
            },
            message: {
                input: messageInput,
                errorElement: document.getElementById('messageError'),
                validate: function(value) {
                    if (!value.trim()) {
                        return 'Project details are required';
                    }
                    if (value.trim().length < 10) {
                        return 'Project details must be at least 10 characters';
                    }
                    return '';
                }
            }
        };

        // Real-time validation for each field
        Object.keys(validationRules).forEach(fieldName => {
            const rule = validationRules[fieldName];
            
            if (rule.input) {
                rule.input.addEventListener('input', function() {
                    const error = rule.validate(this.value);
                    
                    if (error) {
                        rule.errorElement.textContent = error;
                        rule.input.classList.add('error');
                    } else {
                        rule.errorElement.textContent = '';
                        rule.input.classList.remove('error');
                    }
                });

                rule.input.addEventListener('blur', function() {
                    const error = rule.validate(this.value);
                    if (error) {
                        rule.errorElement.textContent = error;
                        rule.input.classList.add('error');
                    }
                });
            }
        });

        // Form submission validation
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;

            Object.keys(validationRules).forEach(fieldName => {
                const rule = validationRules[fieldName];
                const error = rule.validate(rule.input.value);
                
                if (error) {
                    rule.errorElement.textContent = error;
                    rule.input.classList.add('error');
                    isValid = false;
                } else {
                    rule.errorElement.textContent = '';
                    rule.input.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please correct the errors in the form before submitting.');
            }
        });
    }
});


const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

