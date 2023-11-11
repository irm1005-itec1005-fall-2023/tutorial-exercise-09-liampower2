/* Tutorial Exercise 09
 *
 * In Step 03 we're going to be looking
 * at conditionals and loops
 *
 * Follow the instructions below
 *
 */

//
// STEP A - Create a simple if statements
//

// A const variable that is a string set to "Paris"
const vacationDestination = "Paris";

// Use an if statement to check if the desination is === to "Paris"
// and if it is then output "Woohoo, excellent choice" otherwise output "Awww, but that's still cool"
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// Expected output: "Woohoo, excellent choice"
if (vacationDestination === "Paris") {
  console.log("Woohoo, excellent choice");
}
else {
  console.log("Awww, but that's still cool");
}


//
// STEP B - Using if and else if statements
//

// Create a const variable called studentGradeValue and assign it to the number 55
const studentGradeValue = 55;

// Create a let variable called studentGradeLetter and assign it to null
// (since we don't know what it is just yet - we're going to calculate it next
let studentGradeLetter = null;

// Use if and else if statements to calculate the letter grade
// from a numberical value based on the following conditions:
//  IF studentGradeValue greater than or equal to 90 then studentGradeLetter = "A+"
//  ELSE IF studentGradeValue greater than or equal to 80 then studentGradeLetter = "A"
//  ELSE IF studentGradeValue greater than or equal to 70 then studentGradeLetter = "B"
//  ELSE IF studentGradeValue greater than or equal to 60 then studentGradeLetter = "C"
//  ELSE IF studentGradeValue greater than or equal to 50 then studentGradeLetter = "D"
//  ELSE studentGradeLetter = "F"
//
if (studentGradeValue >= 90) {
  studentGradeLetter = "A+";
}
else if (studentGradeValue >= 80) {
  studentGradeLetter = "A";
}
else if (studentGradeValue >= 70) {
  studentGradeLetter = "B";
}
else if (studentGradeValue >= 60) {
  studentGradeLetter = "C";
}
else if (studentGradeValue >= 50) {
  studentGradeLetter = "D";
}
else {
  studentGradeLetter = "F";
}

// Output the calculated Student Grade Letter
// Expected output: "D"
console.log(studentGradeLetter);


//
// STEP C - For loops to walk through an array
//

// JavaScript makes it super easy to walk through an array using a for loop
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
//
// for (const element of array) {
//  console.log(element);
// }

// Using the following array for the next few instructions
let starWarsShips = ["Luke Skywalker", "Star Destroyer", "Millennium Falcon", "CR90 corvette"];

// Create a for loop that loops through our starWarsShips array and then
// outputs each element to the console log
// Expected output:
//  Luke Skywalker
//  Star Destroyer
//  Millennium Falcon
//  CR90 corvette
for (const element of starWarsShips) {
  console.log(element);
}


//
// STEP D - Working with arrays and for loops
//

// We used a really easy way to iterate through a for loop last time, now we need to learn
// how to use a for loop with an index and control values
// Syntax:
// for (let i = 0; i < array.length; i++) {
//  console.log('index:', i, 'element:', arr[i]);
// }
// What's happening above is we are setting up a for loop
// and manually setting where we want the loop to start (at 0) and where we want
// the loop to stop (at array.length - which is the end of the array) and
// what we want to do at the end of each iteration (add 1 to i)

// Using the following const array for the next few instructions
const cities = ['New York', 'Paris', 'Tokyo', 'London', 'Sydney', 'Rio de Janeiro', 'Cape Town', 'Dubai', 'Mumbai', 'Moscow'];

// Using a for loop with manual controls, loop through the above array and console log
// each city and the current current array index (i value) of the loop
// Expected output:
//  0 - "New York"
//  1 - "Paris"
//  2 - "Tokyo"
//  etc until 9 - "Moscow"
// Hint, you can print multiple variables to the console using the "," (comma) value as a seperator
for (let i = 0; i < cities.length ; i++) {
  console.log(i, cities[i]);
}

// Now, lets print the index value of "Paris"
// Loop through the array using a for loop and manual controls, and check each cities[i] entry
// IF the current entry === "Paris" then console log the index
// ELSE just do nothing and go to the next loop iteration
// Expected output:
//  Found Paris is at index: 1
for (let i = 0; i < cities.length ; i++) {
  if (cities[i] === "Paris") {
    console.log("Found Paris at index:", i);
  }
}

// CONGRATULATIONS - THIS CONCLUDES STEP 03
