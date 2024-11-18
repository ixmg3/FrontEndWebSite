document.addEventListener('DOMContentLoaded', () => {
    const openFormButton = document.getElementById('open-contact-form');
    const popupForm = document.getElementById('popup-form');
    const closeFormButton = document.getElementById('close-form');
    const nextButtons = document.querySelectorAll('.next');
    const backButtons = document.querySelectorAll('.back');
    const resetButtons = document.querySelectorAll('.reset');
    const formSteps = document.querySelectorAll('.form-step');
    const confirmName = document.getElementById('confirm-name');
    const confirmEmail = document.getElementById('confirm-email');
    const confirmMessage = document.getElementById('confirm-message');
    const formStatus = document.getElementById('form-status');
    let currentStep = 0;

    // Open the popup form
    openFormButton.addEventListener('click', () => {
        popupForm.style.display = 'flex';
    });

    // Close the popup form
    closeFormButton.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });

    // Show next step
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < formSteps.length - 1) {
                formSteps[currentStep].classList.remove('active');
                currentStep++;
                formSteps[currentStep].classList.add('active');

                // Update confirmation step
                if (currentStep === 2) {
                    confirmName.textContent = document.getElementById('name').value;
                    confirmEmail.textContent = document.getElementById('email').value;
                    confirmMessage.textContent = document.getElementById('message').value;
                }
            }
        });
    });

    // Show previous step
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                formSteps[currentStep].classList.remove('active');
                currentStep--;
                formSteps[currentStep].classList.add('active');
            }
        });
    });

    // Reset form fields
    resetButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('input, textarea').forEach(input => {
                input.value = ''; // Clear each input
            });
        });
    });

    // Handle form submission
    document.getElementById('multi-step-form').addEventListener('submit', (event) => {
        event.preventDefault();
        formStatus.textContent = 'Form submitted successfully!';
        popupForm.style.display = 'none';
        document.getElementById('multi-step-form').reset(); // Reset the form fields
        currentStep = 0; // Reset step counter
        formSteps.forEach(step => step.classList.remove('active')); // Hide all steps
        formSteps[0].classList.add('active'); // Show the first step again
    });
});
