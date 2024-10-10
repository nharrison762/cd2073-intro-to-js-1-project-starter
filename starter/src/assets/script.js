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

const cherry = {
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
function addProductToCart(productId){
  if (productId === 100) { //productId is the same as SKU, check for item
    if (cherry.quantity === 0) { //if none of the SKU is in the cart, add one
      cart.push(cherry); //add fruit to cart
      cherry.quantity++; //increase from 0 to 1 fruit
    } else { //if SKU is in cart, add another
    cherry.quantity++;
    }
  } else if (productId === 101) {
    if (orange.quantity === 0) {
      cart.push(orange);
      orange.quantity++;
    } else {
      orange.quantity++;
    }
  } else { //only 3 fruits, so this must be a strawberry
    if (strawberry.quantity === 0) {
    cart.push(strawberry);
    strawberry.quantity++;
    } else {
    strawberry.quantity++;
    }
  }
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId){
  if (productId === 100) { //check item SKU
    cherry.quantity++; //add fruit to cart
  } else if (productId === 101) {
    orange.quantity++;
    } else {
    strawberry.quantity++;
  }
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId){
  if (productId === 100) { //check item SKU
    if (cherry.quantity > 1) { //check fruit quantity for removal
      cherry.quantity--;
    } else { //if quantity reduced to zero, remove from cart
      cherry.quantity = 0;
      cart.splice(cart.cherry, 1); //begin splice at fruit location (can't believe that works)
    }
  } else if (productId === 101) {
    if (orange.quantity > 1) {
      orange.quantity--;
    } else {
      orange.quantity = 0;
      cart.splice(cart.orange, 1);
    }
  } else {
    if (strawberry.quantity > 1) {
      strawberry.quantity--;
    } else {
      strawberry.quantity = 0;
      cart.splice(cart.strawberry, 1);
    }
  }
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId){
  if (productId === 100) { //check item SKU
    cherry.quantity = 0; //set amount of fruit to zero
    cart.splice(cart.cherry, 1); //remove respective SKU from cart
  } else if (productId === 101) {
    orange.quantity = 0;
    cart.splice(cart.orange, 1);
    } else {
    strawberry.quantity = 0;
    cart.splice(cart.strawberry, 1);
  }
};

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
    cart.splice(cart.fruit, 1); //remove fruit by splicing at fruit location
  });
};

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(moneyPaid){

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
