/* Tutorial Exercise 09
 *
 * In Step 01 we're going to work with basic
 * variables, console logs and object literals.
 *
 * Follow the instructions below
 *
 */


//
// STEP A - outputting to the console
//

// Declare a variable called message and assign it the value "Hello World"
let message = "Hello World";

// Console log the message variable and check in your browser that you can
// see "Hello World" is being output to the console
// Note: Use your browser's developer tools to view the console
console.log(message);


//
// STEP B - Adding two numbers together
//

// Declare a variable called num1 and assign it the value 10 (note: it should be a number and not a string)
let num1 = 10;

// Declare a variable called num2 and assign it the value 50 (note: it also should be a number and not a string)
let num2 = 50;

// Decare a variable called numTotal and assign it the value of num1 added to num2
let numTotal = num1 + num2;

// Console log the numTotal variable and check in your browser that you can
// see 60 is being output to the console
// Note: Use your browser's developer tools to view the console
console.log(numTotal);


//
// STEP C - Adding two strings together
//

// Declare a variable called startMessage and assignment it the value of "Hello World"
let startMessage = "Hello world";

// Declare a variable called endMessage and assignment it the value of "Joey doesn't share French Fries"
let endMessage = "Joey doesn't share French Fries";

// Declare a variable called completeMessage and assign it the value of startMessage added to endMessage
let completeMessage = startMessage + endMessage;

// Console log the completeMessage variable and check in your browser that you can
// see "Hello worldJoey doesn't share French Friens" is being output to the console
console.log(completeMessage);

// You'll notice that there isn't a space between "world" and "Joey"
// We have to manually add a space if we want one
// Reassign completeMessage variable by adding a " " so that a space is included
// between the two strings that you are adding together
completeMessage = startMessage + " " + endMessage;

// Console log the result and you should now see a space inbetween the two strings
console.log(completeMessage);


//
// STEP C - Working with template literals
//

// Declare a constant variable (use const not let) called productPrice and assignment it the value of 5 (the number not the string)
const productPrice = 5;

// Declare a constant variable called productQuantity and assignment it the value of 7 (the number not the string)
const productQuantity = 7;

// Calculate the total price by createing a const variable and assignment it the price multipled by the quantity
const totalPrice = productPrice * productQuantity;

// Use a template literal to output the following line in your console:
// "You can buy 7 coffees for $35"
// Where "7" is the productQuantity value and "35" is the totalPrice value
console.log(`You can buy ${productQuantity} coffees for $${totalPrice}`);


//
// STEP C - Working with object literals
//

// Object literals allow us to "group" together related variables
// Instead of having three variables such as
//  productPrice = 4;
//  productName = "Jacket";
//  isProductInStock = false;
//
// We can use object literals to group together related data
//  product = {
//    price : 4,
//    name : "Jacket",
//    isInStock : false,
//  }
//
// You can then access the data using the dot notation
// product.price <- would give us the value in the price field (4)

// Create an variable called ward and assign it an object literal with the following values
//  name: "College Ward"
//  number: 2
//  population: 45000
//  isRural : false
//
let ward = {
  name: "College Ward",
  number: 2,
  population: 45000,
  isRural: false,
}

// Console log the ward variable and check in your browser that you can see all of the ward data
console.log(ward);

// Use dot notation to reassign the value of ward.population and add 10000 people to the ward
ward.population = ward.population + 10000;

// Console log the ward variable again and check in your browser that you can see the population
// has increased by 10000 (should be 55000 now)
console.log(ward); // Or console.log(ward.population)

// CONGRATULATIONS - THIS CONCLUDES STEP 01
