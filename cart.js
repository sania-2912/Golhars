// Example cart data (you can replace this with dynamic data)
const cartItems = [
    { name: "Painting 1", quantity: 1, price: 500 },
    { name: "Crochet Item", quantity: 2, price: 300 },
  ];
  
  // DOM elements
  const emptyCartMessage = document.getElementById("empty-cart-message");
  const cartContent = document.getElementById("cart-content");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const proceedPaymentButton = document.getElementById("proceed-payment");
  
  // Function to calculate total price
  function calculateTotal() {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }
  
  // Function to render the cart
  function renderCart() {
    if (cartItems.length === 0) {
      emptyCartMessage.classList.remove("hidden");
      cartContent.classList.add("hidden");
    } else {
      emptyCartMessage.classList.add("hidden");
      cartContent.classList.remove("hidden");
      cartItemsContainer.innerHTML = "";
      cartItems.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>₹${item.price * item.quantity}</td>
        `;
        cartItemsContainer.appendChild(row);
      });
      cartTotalElement.textContent = calculateTotal();
    }
  }
  
  // Handle payment button click
  proceedPaymentButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
  
    if (!name || !address || !phone) {
      alert("Please fill in all shipping details before proceeding.");
      return;
    }
  
    alert(`Order confirmed! Shipping to ${name}, ${address}.`);
    // Redirect to payment gateway (mocked here)
    window.location.href = "/payment.html";
  });
  
  // Render the cart on page load
  renderCart();
  