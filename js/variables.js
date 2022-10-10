// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   discount = BASE_DISCOUNT;
//   // Change code above this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   }
//   console.log(discount);
//   return discount;
// }

// getDiscount(4000);
// getDiscount(16000);
// getDiscount(26000);
// getDiscount(66000);

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//     console.log(message);
//     return message;

//   }

//   checkStorage(10,2);
//   checkStorage(10,11);

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line

//    switch (type) {
//       case 'starter':
//         price = 0;
//         break;

//       case 'professional':
//         price = 20;
//         break;

//       case 'organization':
//         price = 50;
//         break;
//     }
//     console.log(price);
//     return price;
//   }

//   getSubscriptionPrice('organization');

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }
//   console.log(message);
//   return message;
// }

// checkPassword("jqueryismyjam");
// checkPassword("errerdf433yyr");
// checkPassword(null);

// function getShippingCost(country) {
//   let message;
//   let price;

//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = `Sorry, there is no delivery to your country`;
//   }

//   console.log(message);
//   return message;
// }

// getShippingCost("Ukraine");
// getShippingCost("China");
// getShippingCost("Australia");
// getShippingCost("Chile");
// getShippingCost("Jamaica");

// function getSubstring(string, length) {
//     const substring = string.slice(0, length); // Change this line
//     console.log(substring);
//     return substring;
//   }

//  getSubstring ("Hello world", 3)
//  getSubstring ("Hello world", 6)
//  getSubstring ("Hello world", 8)
//  getSubstring ("Hello world", 11)
//  getSubstring ("Hello world", 0)

// function formatMessage(message, maxLength) {
//     let result;
//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + '...'
//   } else {
//     result = message
//   }
//   console.log(result);
//     return result;
//   }

//   formatMessage("Curabitur ligula sapien", 16)
//   formatMessage("Curabitur ligula sapien", 23)
//   formatMessage("Vestibulum facilisis purus nec", 20)
//   formatMessage("Vestibulum facilisis purus nec", 30)
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)

//   function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase();
//     console.log(normalizedInput);
//     return normalizedInput;
//   }

//   normalizeInput("Hello world")

// function checkForName(fullName, name) {
//     const result = fullName.includes(name);
//     console.log(result);
//      return result;
//    }

//    checkForName("Egor Kolbasov", "Egor")
//    checkForName("Egor Kolbasov", "egor")

// function checkForSpam(message) {
//     let result;
//     result = message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam');
//     console.log(result);
//     return result;
//   }

//   checkForSpam("Latest technology news")
//   checkForSpam("Get best sale offers now!")
//   checkForSpam("Trust me, this is not a spam message")

// const rightNumber = function (number) {
//   let message = "";
//   number === 10 ? (message = "Right") : (message = "False");
//   return message;
// };

// console.log(rightNumber(10));

// При помощи цыкла for додайте все четные числа от   min до max

// const evenNumber = function (min, max) {
//   let total = 0;

//   for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// };

// console.log(evenNumber(1, 6));
