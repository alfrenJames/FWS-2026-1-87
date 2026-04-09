document.addEventListener("DOMContentLoaded", () => {
  const cartBox = document.querySelector(".items-box");
  const addButtons = document.querySelectorAll(".add-to-cart");
  const checkoutButton = document.querySelector(".check-out");

  addButtons.forEach(button => {
    button.addEventListener("click", () => {
      const itemName = button.parentElement.querySelector(".item-name").textContent;

      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.textContent = itemName;

      cartBox.appendChild(cartItem);
    });
  });

  checkoutButton.addEventListener("click", () => {
    cartBox.innerHTML = ""; 
    alert("Thank you for your purchase!"); 
});
});