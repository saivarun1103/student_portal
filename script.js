// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const studentName = document.getElementById('studentName').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation
    if (studentName === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Save the student name in local storage to use it on the welcome page
    localStorage.setItem('studentName', studentName);

    // Redirect to the welcome page
    window.location.href = 'portal.html';
});

// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    // Toggle the type attribute
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the eye / eye slash icon
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

// Handle Forgot Password Modal
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeButton = document.querySelector('.close-button');

forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    forgotPasswordModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    forgotPasswordModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === forgotPasswordModal) {
        forgotPasswordModal.style.display = 'none';
    }
});

// Handle Reset Password Form Submission
document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const resetEmail = document.getElementById('resetEmail').value;

    if (resetEmail === "") {
        alert("Please enter your email.");
        return;
    }

    // Here, you would typically handle the password reset logic, such as sending a reset link to the email
    alert("A password reset link has been sent to " + resetEmail);

    // Close the modal
    forgotPasswordModal.style.display = 'none';
});
