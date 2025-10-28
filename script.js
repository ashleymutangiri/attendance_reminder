// Handle Sign Up
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (localStorage.getItem(username)) {
      document.getElementById('signupMessage').textContent = "Username already exists!";
      return;
    }

    localStorage.setItem(username, password);
    document.getElementById('signupMessage').textContent = "Sign-up successful! Redirecting to login...";
    setTimeout(() => window.location.href = "index.html", 1500);
  });
}

// Handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
      document.getElementById('loginMessage').textContent = "Login successful! Redirecting to login";
    } else {
      document.getElementById('loginMessage').textContent = "Invalid username or password.";
    }
  });
}
