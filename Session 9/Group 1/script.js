let quantity = 0;

// select at mag set ng const ng gusto mangyari sa output
const display = document.querySelector('.cart-quantity');
const addButtons = document.querySelectorAll('.add-to-cart');
const removeBtn = document.querySelector('.remove-button button');
const checkoutBtn = document.querySelector('.checkout-button button');

// mag update ang display once na mag click
function updateDisplay() {
  display.textContent = "Total Items: " + quantity;
}

// conditions, lagyan ng limit 
addButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (quantity >= 10) {
      alert("Cart is full\nProceed to checkout");
      return;
    }
    quantity += 1;
    updateDisplay();
  });
});

// pag-click ng remove, mababawasan ng isa at pop-up kapag below 0 ang quantity
removeBtn.addEventListener('click', () => {
  if (quantity > 0) {
    quantity -= 1;
    updateDisplay();
  } else {
    alert("Cart is already empty");
  }
});

// pop-up kapag click ng checkout button
checkoutBtn.addEventListener('click', () => {
  alert("Thank you for purchasing!");
});

