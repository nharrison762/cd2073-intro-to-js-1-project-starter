let totalPaid = 0; //global variable to hold payment balance

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const cherry = { //creating objects
  name: "cherry",
  price: 3,
  quantity: 0,
  productId: 100,
  image: "/images/cherry.jpg"
};

const orange = {
  name: "orange",
  price: 1,
  quantity: 0,
  productId: 101,
  image: "/images/orange.jpg"
};

const strawberry = {
  name: "strawberry",
  price: 2,
  quantity: 0,
  productId: 102,
  image: "/images/strawberry.jpg"
};

products.push(cherry); //add products to array so it doesnt freak out
products.push(orange);
products.push(strawberry);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(SKU){ //find fruit by internal ID
   products.forEach(fruit => {
     if (SKU === fruit.productId) {
       if (fruit.quantity === 0) {
         cart.push(fruit);
         fruit.quantity = 1; //add fruit to cart if none present
       } else {
         fruit.quantity++;
       }
     }
  });
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(SKU){
  products.forEach(fruit => {
    if (SKU === fruit.productId) { //find correct fruit and increase
        fruit.quantity++;
    }
 });
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(SKU){
  products.forEach(fruit => { //find correct fruit
    if (SKU === fruit.productId) {
      if (fruit.quantity > 1) { //decrease if fruit will remain after
        fruit.quantity--;
      } else {
        fruit.quantity = 0; //if fruit is not more than 1, zero quantity and remove
        removeProductFromCart(SKU);
      }
    }
 });
};

function removeProductFromCart(SKU){
  products.forEach(fruit => {
    if (SKU === fruit.productId) { //find the correct product
      fruit.quantity = 0;
      cart.splice(cart.indexOf(fruit), 1); //zero out quantity and splice out object
    }
  });
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal(){
  let total = 0; //initialize total
  products.forEach(fruit => { //for each SKU add price times quantity to total
    total += fruit.quantity * fruit.price;
  });
  return total;
};

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  products.forEach(fruit => {
    fruit.quantity = 0;  //zero fruit quantity
    removeProductFromCart(fruit.productId); //remove fruit
  });
};

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(money){ //tip: create total paid as global to track amount after paying
  totalPaid = totalPaid + money;
  let remainder = totalPaid - cartTotal(); //calculate how much is left
  if (remainder > 0) {
    totalPaid = totalPaid - remainder; //reduce customer debt
  }
  return remainder; //return balance to program
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
