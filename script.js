document.addEventListener('DOMContentLoaded', function() {
       const addToOrderButtons = document.querySelectorAll('.add-to-order');
       const cartItemsElement = document.querySelector('.cart-items'); // Assuming we have a div with class 'cart-items' to display cart items
       const cartTotalElement = document.querySelector('.cart-total');   // Assuming we have an element with class 'cart-total' to display total
       let cart = [];
   
       addToOrderButtons.forEach(button => {
           button.addEventListener('click', handleAddToOrder);
       });
   
       function handleAddToOrder(event) {
           const menuItem = event.target.parentElement;
           const itemName = menuItem.querySelector('h2').textContent;
           const itemPrice = parseFloat(menuItem.querySelector('.price').textContent.slice(1)); // Remove the '$' and parse as float
   
           addToCart(itemName, itemPrice);
           updateCartDisplay();
       }
   
       function addToCart(name, price) {
           const existingCartItem = cart.find(item => item.name === name);
   
           if (existingCartItem) {
               existingCartItem.quantity++;
           } else {
               cart.push({ name: name, price: price, quantity: 1 });
           }
       }
   
       function updateCartDisplay() {
           cartItemsElement.innerHTML = ''; // Clear previous cart display
           let total = 0;
   
           cart.forEach(item => {
               const cartItemDiv = document.createElement('div');
               cartItemDiv.classList.add('cart-item'); // Add class for styling
               cartItemDiv.innerHTML = `
                   <span>${item.name} x ${item.quantity}</span>
                   <span>$${(item.price * item.quantity).toFixed(2)}</span>
               `;
               cartItemsElement.appendChild(cartItemDiv);
               total += item.price * item.quantity;
           });
   
           cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
       }
   });
