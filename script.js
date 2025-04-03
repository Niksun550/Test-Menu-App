document.addEventListener('DOMContentLoaded', function() {
       const addToOrderButtons = document.querySelectorAll('.add-to-order');
   
       addToOrderButtons.forEach(button => {
           button.addEventListener('click', handleAddToOrder);
       });
   
       function handleAddToOrder(event) {
           const menuItem = event.target.parentElement;
           const itemName = menuItem.querySelector('h2').textContent;
           const itemPrice = menuItem.querySelector('.price').textContent;
   
           // Basic implementation: Log the item details to the console
           console.log(`Added to order: ${itemName} - ${itemPrice}`);
   
           // You would typically add this item to an order/cart array
           // and update the UI to reflect the current order.
           // For example:
           // addToCart(itemName, itemPrice);
           // updateCartDisplay();
       }
   
       // Example functions (you'll need to implement these)
       function addToCart(name, price) {
           // Logic to add item to the cart
           // This could involve storing items in an array
           // and updating the cart display.
           console.log("Add to cart function called")
       }
   
       function updateCartDisplay() {
           // Logic to update the cart display on the page
           // This would involve dynamically creating or modifying
           // HTML elements to show the items in the cart.
           console.log("update cart display function called")
       }
   });
