// Initialize SweetAlert
const Swal = window.Swal;

// Function to handle Register form submission
async function handleRegister(event) {
  event.preventDefault();

  Swal.fire({
    title: 'Success!',
    text: 'Registration successful!',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then(() => {
    Login(); // Switch to the login form
  });
}

// Function to handle Login form submission
async function handleLogin(event) {
  event.preventDefault();

  Swal.fire({
    title: 'Login successful!',
    text: 'You are now logged in.',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then(() => {
    window.location.href = "home.html"; // Redirect to home page after successful login
  });
}

// Toggle between Register and Login forms
function Register() {
  document.getElementById("Login").style.left = "-400px";
  document.getElementById("Register").style.left = "50px";
  document.getElementById("toggle_btn").style.left = "110px";
}

function Login() {
  document.getElementById("Login").style.left = "50px";
  document.getElementById("Register").style.left = "450px";
  document.getElementById("toggle_btn").style.left = "0";
}

// Assign event listeners to the forms
document.getElementById("Register").addEventListener("submit", handleRegister);
document.getElementById("Login").addEventListener("submit", handleLogin);
