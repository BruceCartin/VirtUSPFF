const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const form = document.getElementById('signin-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate inputs
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // Securely compare credentials (replace with actual server-side authentication)
    const isAuthenticated = username === 'admin' && password === 'password';

    if (isAuthenticated) {
        // Redirect to home page using a secure redirect method
        // Replace with your actual redirect logic
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

