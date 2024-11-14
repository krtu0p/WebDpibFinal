// API URLs
const registerUrl = 'https://auth-production-32a9.up.railway.app/v1/register';
const loginUrl = 'https://auth-production-32a9.up.railway.app/v1/login';
// Initialize SweetAlert
const Swal = window.Swal;

// Function to handle Register form submission
async function handleRegister(event) {
  event.preventDefault();

  // Collect form data
  const username = document.querySelector('#Register input[placeholder="Username"]').value.trim();
  const email = document.querySelector('#Register input[placeholder="E-mail"]').value.trim();
  const password = document.querySelector('#Register input[placeholder="Password"]').value.trim();

  if (!username || !email || !password) {
    Swal.fire({
      title: 'Error!',
      text: 'All fields are required!',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }

  // Prepare the data object
  const data = {
    username: username,
    email: email,
    password: password,
  };


  // Send data to the backend
  try {
    const response = await fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const text = await response.text();
    console.log("Register Response Text:", text);
    const responseData = JSON.parse(text);

    if (response.ok) {
      Swal.fire({
        title: 'Success!',
        text: responseData.message || 'Registration successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        Login(); // Switch to the login form
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: responseData.error || 'Registration failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    Swal.fire({
      title: 'Error!',
      text: 'An error occurred during registration!',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
}

// Function to handle Login form submission
async function handleLogin(event) {
  event.preventDefault();

  // Get the input values
  const identifier = document.querySelector('#Login input[placeholder="Username or E-Mail"]').value.trim();
  const password = document.querySelector('#Login input[placeholder="Password"]').value.trim();

  if (!identifier || !password) {
    Swal.fire({
      title: 'Error!',
      text: 'Please enter a valid username/email and password.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }

  // Prepare the data to send to the backend
  const data = {
    identifier: identifier,
    password: password
  };

  // Log the payload

  // Send login request to the backend
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const text = await response.text();
    console.log("Login successful");
    const responseData = JSON.parse(text);

    if (response.ok && responseData.token) {
      Swal.fire({
        title: 'Login successful!',
        text: 'You are now logged in.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        localStorage.setItem('authToken', responseData.token);
        window.location.href = "index.html"; // Redirect to home page after successful login
      });
    } else {
      Swal.fire({
        title: 'Invalid login credentials!',
        text: responseData.error || 'Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    Swal.fire({
      title: 'Error!',
      text: 'An error occurred during login!',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
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
