/* Tutorial Exercise 09
 *
 * In Step 04 we're going to be writing
 * some code in functions that lets
 *
 * Follow the instructions below
 * Check the console log for outputs
 *
 */

// Array of random numbers
const randomNumbers = [ 112, 1, 2, 3, 4, -5, 6, 7, 8, 9, 30, 47, 99, 100, 200];


//
// STEP A: Find the largst number in the array
//

// Working inside this function stub
// write a for loop that walks through
// the array and compares the current array index
// with the variable highestNumber
// If the current value is higher than the highestNumber
// then we just found a higher number and can save it
// as the highestNumber
function findLargestNumber(randomNumbers) {
  // Initialise the highestNumber variable to the first item in the array
  let highestNumber = randomNumbers[0];

  // Add your for loop here
  for(let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > highestNumber) {
      highestNumber = randomNumbers[i];
    }
  }

  // This returns the value we identified
  return highestNumber;
}


//
// STEP B: Find the smallest number in the array
//

// This will be very similiar to the above for loop
// except now we're looking for the smallest number
// so we need to compare our temp variable with
// our array item and then if it's smaller we store that
// one
function findSmallestNumber(randomNumbers) {
  // Initialise the smallestNumber variable to the first item in the array
  let smallestNumber = randomNumbers[0];

  // Add your for loop here
  for(let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] < smallestNumber) {
      smallestNumber = randomNumbers[i];
    }
  }

  // This returns the value we identified
  return smallestNumber;
}


//
// STEP C: Add up all of the numbers together
//

// Use a for loop to walk through our array
// and each iteration just add the value
// to a running total that we keep track of (sumTotal variable)
function calculateSumTotal(randomNumbers) {
  // Initialise the sumTotal variable to zero (0)
  // Add each array item to this and then
  // we will have the sum total
  let sumTotal = 0;

  // Add your for loop here to calculate the sum total
  for (let i = 0; i < randomNumbers.length; i++) {
    sumTotal = sumTotal + randomNumbers[i];
  }

   // This returns the value we calculated
  return sumTotal;
}

//
// STEP D: Calculate the Average
//

// In the last step we calculated the total of the array items added up
// Since we know we can get how many items are in the array using .length
// it will be user easy to calculate the average.
// Use the following formula to calculate the average:
// average = sum total / number of items
function calculateAverage(randomNumbers) {
  // Initialise the average variable to null (since it's not calculated yet)
  let average = null;

  // Use your calculateSumTotal(randomNumbers) function call to get the
  // sum total and divide it by the randomNumbers.length value and then
  // assign it to the average variable
  average = calculateSumTotal(randomNumbers) / randomNumbers.length;

  // Uncomment the line below if you want to have the average rounded at 2 decimal places
  // average = average.toFixed(2);

  return average;
}

// CONGRATULATIONS - THIS CONCLUDES STEP 04
// THIS ONE WAS A DIFFICULT ONE - GIVE YOURSELF A PAT ON THE BACK
// CHECK THE CONSOLE LOG FOR OUTPUTS

/*

  DO NOT MODIFTY THE CODE BELOW
  THESE ARE THE AUTOMATED TESTS
  AND CONSOLE LOG OUTPUTS
  THAT CALL YOUR FUNCTIONS

*/

//  Output the original Array of values to the console
try {

  // Check if it's an array
  if (!Array.isArray(randomNumbers)) {
    throw new Error("Whoops: 'randomNumbers' is not an array.");
  }

  // Check that the array has more than 1 value
  if (randomNumbers.length < 2) {
    throw new Error("Whoops: 'randomNumbers' does not have enough values.");
  }

  // Check that all the array values are numbers
  for (let i = 0; i < randomNumbers.length; i++) {
    if (typeof randomNumbers[i] !== "number") {
      throw new Error("Whoops: 'randomNumbers' contains a non-number value.");
    }
  }

  // No errors - write to the console
  console.log("✅ Original Array: ", randomNumbers);
}
catch (error) {
  console.error(error.message);
}

// Output the highest number in the array
try {

  const highestNumber = findLargestNumber(randomNumbers);

  // Check if highestNumber is null or not a number
  if (highestNumber === null || typeof highestNumber !== "number") {
    throw new Error("Whoops: The \"findLargestNumber\" function did not return a number.");
  }

  // No errors - write to the console
  console.log("✅ The largest number in the array is: ", highestNumber);

}
catch(error) {
  console.error(error.message);
}


// Output the highest number in the array
try {

  const smallestNumber = findSmallestNumber(randomNumbers);

  // Check if smallestNumber is null or not a number
  if (smallestNumber === null || typeof smallestNumber !== "number") {
    throw new Error("Whoops: The \"findSmallestNumber\" function did not return a number.");
  }

  // No errors - write to the console
  console.log("✅ The smallest number in the array is: ", smallestNumber);

}
catch(error) {
  console.error(error.message);
}



// Output the sum total of all of the number in the array
try {
  const sumTotal = calculateSumTotal(randomNumbers);

  // Check if sumTotal is null or not a number
  if (sumTotal === null || typeof sumTotal !== "number") {
    throw new Error("Whoops: The \"calculateSumTotal\" function did not return a number.");
  }

  // No errors - write to the console
  console.log("✅ The sum total of the numbers in the array is: ", sumTotal);

}
catch(error) {
  console.error(error.message);
}



// Output the calculated average of all of the number in the array
try {
  const average = calculateAverage(randomNumbers);

  // Check if average is null
  if (average === null) {
    throw new Error("Whoops: The \"calculateAverage\" function returned null.");
  }

  // Check if average is a number
  if (isNaN(average)) {
    throw new Error("Whoops: The \"calculateAverage\" function did not return a number.");
  }

  // No errors - write to the console
  console.log("✅ The average of the numbers in the array is: ", average);

}
catch(error) {
  console.error(error.message);
}
