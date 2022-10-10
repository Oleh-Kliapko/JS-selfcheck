// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     console.log("Your order is empty!");

//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     console.log("Your order is too large, not enough goods in stock!");

//     return "Your order is too large, not enough goods in stock!";
//   }

//   console.log("The order is accepted, our manager will contact you");
//   return "The order is accepted, our manager will contact you";
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[fruits.length - 1] = "banana";

// function getExtremeElements(array) {
//   console.log(array[0], array[array.length - 1]);
//   return [array[0], array[array.length - 1]];
// }

// getExtremeElements(["apple", "peach", "pear", "banana"]);

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   console.log(words);
//   return words;
// }
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");

// function calculateEngravingPrice(message, pricePerWord) {
// let totalPrice;
// // const arrayFromMessage = message.split(" ");
// // totalPrice = arrayFromMessage.length * pricePerWord;
// totalPrice = message.split(" ").length * pricePerWord;
// console.log(totalPrice);
// return totalPrice;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10)
// calculateEngravingPrice("JavaScript is in my blood", 20)
// calculateEngravingPrice("Web-development is creative work", 40)
// calculateEngravingPrice("Web-development is creative work", 20)

// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");
//   console.log(slug);
//   return slug;
// }

// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// function makeArray(firstArray, secondArray, maxLength) {
//     const allArrays = firstArray.concat(secondArray);
//     const cutArrays = allArrays.slice(0, maxLength)
//     console.log(cutArrays);
//     return cutArrays;
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// function calculateTotal(number) {
//   let total = 0;

//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   console.log(total);
//   return total;
// }

// calculateTotal(7);

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// function findLongestWord(string) {
//   if (!string) {
//     return string;
//   }

//   const array = string.split(" ");
//   let lengthOfWord = array[0].length;
//   let longestWord = array[0];

//   for (let i = 1; i < array.length; i += 1) {
//     if (array[i].length > lengthOfWord) {
//       lengthOfWord = array[i].length;
//       longestWord = array[i];
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
// }

// findLongestWord();
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");
// findLongestWord();

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min - 1; i < max; i += 1) {
//     numbers.push(i + 1);
//   }
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
// createArrayOfNumbers();

// function filterArray(numbers, value) {

//   let largerNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       largerNumbers.push(numbers[i]);
//     }
//   }
//   console.log(largerNumbers);
//   return largerNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray();

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     return fruits.includes(fruit);
//   }

// checkFruit("plum");
// checkFruit("mandarin");

// function getCommonElements(array1, array2) {
//   let newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i]) === true) {
//       newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const eachOrder of order) {
//     total += eachOrder;
//   }
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// function getEvenNumbers(start, end) {
//   let evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   console.log(evenNumbers);
//   return evenNumbers;
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// function includes(array, value) {
//   for (const valueInArray of array) {
//     if (valueInArray === value) {
//       console.log(true);
//       return true;
//     }
//   }
//   console.log(false);
//   return false;
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
