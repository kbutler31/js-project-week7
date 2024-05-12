//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//     Do not use numbers to reference the last element, find it programmatically.
//     ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element in the array from the last element programmatically
// let resultFirstLast = ages[ages.length - 1] - ages[0];
// console.log("Result of subtracting the first element from the last element:", resultFirstLast);

// Add a new age to the array
let newAge = 50;
ages.push(newAge);

// Subtract the new last element from the first element programmatically
let resultNewFirstLast = ages[ages.length - 1] - ages[0];
console.log("Result of subtracting the new element from the first element:", resultNewFirstLast);

// Calculate the average age
let total = ages.reduce((acc, val) => acc + val, 0);
let averageAge = total / ages.length;
console.log("Average age in the array:", averageAge);

//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

// An array of names provided to us 
   // let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// // Calculate the average number of letters per name
// let totalLetters = 0;
// for (let i = 0; i < names.length; i++) {
//     totalLetters += names[i].length;
// }
// let averageLetters = totalLetters / names.length;
// console.log("Average number of letters per name:", averageLetters);

// // Concatenate all names together, separated by spaces
// let concatenatedNames = "";
// for (let i = 0; i < names.length; i++) {
//     concatenatedNames += names[i] + " ";
// }
// console.log("Concatenated names:", concatenatedNames);

//3. How do you access the last element of any array?

// The answer is myArray[myArray.length - 1].

//4. How do you access the first element of any array?

// The answer is myArray[0].

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. 
let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// Create a new array to store name lengths
let nameLengths = [];
// Loop through the names array and add the length of each name to the nameLengths array
for (let i = 0; i < names.length; i++){
  // To calculate the length of a string, you can use the length property of the string.
  nameLengths.push(names[i].length);
}
 // Print out the resulting nameLengths array

console.log("Name lengths:", nameLengths);

// 6. Create a new array called numbers. Write a loop to iterate over the numbers array and create a new array called evenNumbers
// Create an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create a new array to store even numbers
let evenNumbers = [];

// Iterate over the numbers array
for (let i = 0; i < numbers.length; i++) {
    // Check if the number is even
    if (numbers[i] % 2 === 0) {
        // If the number is even, add it to the evenNumbers array
        evenNumbers.push(numbers[i]);
    }
}

// Print out the resulting evenNumbers array
console.log("Even numbers:", evenNumbers);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

// Define the function to concatenate a word to itself a specified number of times
function concatenateWord(word, n) {
    // Return the word concatenated to itself n number of times
    return word.repeat(n);
}
console.log(concatenateWord("Hello", 3))

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

// Define the function to create a full name 
function createFullName(firstName, lastName) {
    // Concatenate the first name and last name with a space in between
    let fullName = firstName + " " + lastName;

    // Return the full name
    return fullName;
}
console.log(createFullName("John", "Doe"))

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 

// Write the function to check if the sum of all the numbers in the array is greater than 100
function sumGreaterThan100(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

        if (sum > 100) {
            return true;
        }
    }

    return false;
}

console.log(sumGreaterThan100([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

// Write the function to calculate the average of all the elements in the array
function calculateAverage(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];}
  let average = sum / numbers.length;
  return average;
}
// test array
// let numbers = [1, 2, 3, 4, 5];
// call the function and print the result
console.log(calculateAverage(numbers));
// This wiil output the average of the numbers in the array, which is 3.

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// Write the function to check if the average of the elements in the first array is greater than the average of the second array
function averageGreaterThanAverage(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;

    // Calculate the sum of all elements in the first array
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }

    // Calculate the sum of all elements in the second array
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }

    // Calculate the average for each array
    let average1 = sum1 / array1.length;
    let average2 = sum2 / array2.length;

    // Compare the averages and return true if the average of the first array is greater than the second array
    if (average1 > average2) {
        return true;
    } else {
        return false;
    }
}

// Test the function with two arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

console.log(averageGreaterThanAverage(array1, array2)); // This will output false since the average of elements in array1 is not greater than the average of elements in array2

// 12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// Write the function to check if it is hot outside and if moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true; // Buy a drink
    } else {
        return false; // Do not buy a drink
    }
}

// Test the function with different scenarios
console.log(willBuyDrink(true, 5)); // Should return false, not enough money
console.log(willBuyDrink(true, 15)); // Should return true, hot outside and enough money
console.log(willBuyDrink(false, 20)); // Should return false, not hot outside

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// This function calculates the random roll of a 6 sided dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
// When you log this code its random so do it more than once or twice and you will get a different number
console.log(rollDice(6))