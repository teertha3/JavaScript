const credentials = {
  admin: "password123",        // Admin-level access
  user1: "welcome123",         // Regular user
  guest: "guestpass",          // Limited guest access
  johnDoe: "jd2024!",          // Custom user
  janeSmith: "jsSecure#99",    // Custom user
  testUser: "test@123",        // For testing purposes
  developer: "devAccess42",    // Developer-level user
  manager: "mgrPass!2025"      // Manager account
};


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const username = usernameInput.trim();
  const password = passwordInput.trim();
  const message = document.getElementById("message");

  message.style.color = "red";

  // Test Case 1: Blank fields
  if (!username || !password) {
    message.textContent = "Please enter both username and password.";
    return;
  }

  // If either username or password are incorrect due to whitespace
  if (usernameInput !== username || passwordInput !== password) {
    message.textContent = "Invalid username or password (check for extra spaces).";
    message.style.color = "red";
    return;
  }

  // If both username and password are correct and matched
  if (credentials.hasOwnProperty(username) && credentials[username] === password) {
    message.style.color = "green";
    message.textContent = `Welcome, ${username}! Login successful.`;
    return;
  }

  // If username is case-sensitive mismatch
  if (Object.keys(credentials).some(key => key.toLowerCase() === username.toLowerCase())) {
    message.textContent = "Login failed: Username is case-sensitive.";
    message.style.color = "red";
    return;
  }

  // If username is invalid
  if (!credentials.hasOwnProperty(username)) {
    message.textContent = "Invalid username or password.";
    message.style.color = "red";
    return;
  }

  // If username exists but password is wrong
  message.textContent = "Invalid username or password.";
  message.style.color = "red";
});
// CSV upload and parsing
document.getElementById('csvFile').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const lines = e.target.result.trim().split('\n');
    for (let i = 1; i < lines.length; i++) { // skip header
      const [user, pass] = lines[i].trim().split(',');
      if (user && pass && !credentials.hasOwnProperty(user)) {
        credentials[user] = pass;
      }
    }
    console.log('Credentials loaded from CSV:', credentials);
  };
  reader.readAsText(file);
});

