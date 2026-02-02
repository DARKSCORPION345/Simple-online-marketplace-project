// Registration validation
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value;

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  alert("Registration successful!");

  // Simple cookie (no personal data stored)
  document.cookie = "visited=true; max-age=86400";
});

// Product search filter
function filterProducts() {
  const input = document.getElementById("search").value.toLowerCase();
  const products = document.querySelectorAll("#productList .card");

  products.forEach(product => {
    const name = product.textContent.toLowerCase();
    product.style.display = name.includes(input) ? "block" : "none";
  });
}
