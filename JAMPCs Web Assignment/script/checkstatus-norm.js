// Function to handle logout
function logout() {
  sessionStorage.removeItem("isLogged"); // Remove the login status
  alert("Logged out successfully");
  // Redirect to the desired page after logout (e.g., home page)
  window.location.href = "home.html";
}

// Check if the user is logged in
function checkLoginStatus() {
  var isLogged = sessionStorage.getItem("isLogged");
  var loginHover = document.getElementById("login-hover");
  var logoutHover = document.getElementById("logout-hover");

  if (isLogged === "true") {
    // User is logged in, show logout option
    loginHover.style.display = "none";
  } else {
    // User is not logged in, hide logout option
    logoutHover.style.display = "none";
  }
}

// Call the checkLoginStatus function when the page loads
window.addEventListener("load", checkLoginStatus);


function showLoginHover() {

  var loginDropdown = document.getElementById("login-hover-wrap");
  loginDropdown.style.display = "block";
}

function hideLoginHover() {
  var loginDropdown = document.getElementById("login-hover-wrap");
  loginDropdown.style.display = "none";
}

// Call the showLoginDropdown function when the page loads
