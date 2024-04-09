let isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
let savedUsername = "rizza"; // Change this to your initial username
let savedPassword = "password59"; // Change this to your initial password

function createPopup() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0, 0, 0, 0.2)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1";
  overlay.id = "overlay";

  const loginBox = document.createElement("div");
  loginBox.style.background = "#333";
  loginBox.style.color = "#fff";
  loginBox.style.padding = "20px";
  loginBox.style.borderRadius = "8px";
  loginBox.style.textAlign = "center";
  loginBox.style.fontFamily = "Arial, sans-serif"; // Change the font-family
  loginBox.id = "login"

  const usernameLabel = document.createElement("label");
  usernameLabel.innerText = "Username:";
  usernameLabel.style.display = "block"; // Move label to a new line
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  usernameInput.required = true;
  usernameInput.style.marginBottom = "10px";

  const passwordLabel = document.createElement("label");
  passwordLabel.innerText = "Password:";
  passwordLabel.style.display = "block"; // Move label to a new line
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  passwordInput.required = true;
  passwordInput.style.marginBottom = "20px";

  const signInButton = document.createElement("button");
  signInButton.id = "signin-button";
  signInButton.innerText = "Sign In";
  signInButton.style.background = "#4CAF50";
  signInButton.style.color = "white";
  signInButton.style.border = "none";
  signInButton.style.padding = "10px";
  signInButton.style.borderRadius = "5px";
  signInButton.onclick = signIn;

  const errorMessage = document.createElement("p");
  errorMessage.style.color = "red";
  errorMessage.style.marginTop = "10px";

  loginBox.appendChild(document.createElement("h2")).innerText = "Sign In";
  loginBox.appendChild(usernameLabel);
  loginBox.appendChild(usernameInput);
  loginBox.appendChild(document.createElement("br"));
  loginBox.appendChild(passwordLabel);
  loginBox.appendChild(passwordInput);
  loginBox.appendChild(document.createElement("br"));
  loginBox.appendChild(signInButton);
  loginBox.appendChild(errorMessage); // Append errorMessage directly to loginBox

  overlay.appendChild(loginBox);

  document.body.appendChild(overlay);
}

function removeSignInElements() {
  const loginBox = document.getElementById("login");
  const overlay = document.getElementById("overlay");
  loginBox.remove();
  overlay.remove();
}


function signIn() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.querySelector("#overlay p");

  // Ensure errorMessage is present
  if (!errorMessage) {
    createPopup();
    return;
  }

  // Replace this check with your authentication logic
  if (username === savedUsername && password === savedPassword) {
    sessionStorage.setItem("isAuthenticated", "true");
    removeSignInElements(); // Call this function after successful sign-in
  } else {
    errorMessage.innerText = "Invalid username or password. Please try again.";
  }
}

function checkAuthentication() {
  if (!isAuthenticated) {
    createPopup();
  } else {
    // Add your code for the main content here
  }
}

// Initial check on page load
document.addEventListener('DOMContentLoaded', function(){
    checkAuthentication();
});
