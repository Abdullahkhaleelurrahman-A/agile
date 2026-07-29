function togglePassword(checkbox) {
  const pass = document.getElementById("password");
  pass.type = checkbox.checked ? "text" : "password";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username) {
    alert("Enter Registration Number");
    return;
  }

  if (!password) {
    alert("Enter Password");
    return;
  }

  if (username === "username" && password === "password") {
    window.location.href = "instruction.html";
  } else {
    alert("Invalid username or password.");
  }
});