/* eslint-disable max-classes-per-file */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },

//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],

//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],

//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },

//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },

//   getOrdersByEmail(email) {
//     return this.orders.filter((order) => order.email === email);
//   },
// };

// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

//**************************** ВИКОРИСТАННЯ КЛАСІВ В ES5 *************************/
// const Animal = function(options) {
//   this.name = options.name
//   this.color = options.color
// }
//
// Animal.prototype.voice = function() {
//   console.log('Base voice from ', this.name)
// }
//
// // console.log(Animal.prototype)
//
// const dog = new Animal({name: 'Rex', color: '#fff'})
// // const dog = {name: 'Rex', color: '#fff'}
//
// // dog.voice()
//
// const Cat = function(options) {
//   Animal.apply(this, arguments)
//   this.hasTail = options.hasTail
//   this.type = 'cat'
// }
//
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat
//
// Animal.prototype.voice = function() {
//   console.log('This sound goes from: ', this.name)
// }
//
// Cat.prototype.voice = function() {
//   Animal.prototype.voice.apply(this, arguments)
//   console.log(this.name + ' says Meow')
// }
//
// const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})
// console.log(cat)

//**************************** ВИКОРИСТАННЯ КЛАСІВ В ES6 *************************/
// class Animal {
//   constructor(options) {
//     this.name = options.name;
//     this.color = options.color;
//   }

//   voice() {
//     console.log("Base voice from ", this.name);
//   }
// }

// const dog = new Animal({ name: "Rex", color: "white" });
// console.log(dog);

// class Cat extends Animal {
//   constructor(options) {
//     super(options);

//     this.hasTail = options.hasTail;
//     this.type = "cat";
//   }

//   voice() {
//     super.voice();
//     console.log(this.name + " says Meow");
//   }
// }

// const cat = new Cat({ name: "Murzik", color: "#000", hasTail: true });

// Examples
// Object.prototype.print = function () {
//   console.log(`I am object: `, this);
// };

// cat.print();

// Array.prototype.mapAndLog = function () {
//   console.log("Array to map", this);
//   return this.map.apply(this, arguments);
// };

// console.log([1, 2, 3, 4].mapAndLog((x) => x ** 2));

// String.prototype.toTag = function (tagName) {
//   return `<${tagName}>${this}</${tagName}>`;
// };

// console.log("eminem".toTag("strong"));
// console.log("eminem".toTag("em"));

// Number.prototype.toBigInt = function () {
//   return BigInt(this);
// };

// const number = 42;
// console.log(number.toBigInt());

// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     return this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     return this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// car1.changeBrand("Honda");
// console.log(car1.getBrand());

// class Car {
//   #price;

//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;

//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     }
//     return false;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// for (const key of Object.keys(user)) {
//   console.log(`${key}:${user[key]}`);
// }

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const sumSalaries = (salaries) =>
//   Object.values(salaries).reduce((sum, salary) => {
//     return sum + salary;
//   }, 0);

// console.log("🚀 ~ sumSalaries", sumSalaries(salaries));

//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//   read(a, b) {
//     this.x = a;
//     this.y = b;
//   },

//   sum() {
//     return this.x + this.y;
//   },

//   mult() {
//     return this.x * this.y;
//   },
// };

// calculator.read(10, 15);
// calculator.sum();
// console.log("🚀 ~ calculator.sum", calculator.sum());
// calculator.mult();
// console.log("🚀 ~ calculator.mult", calculator.mult());

//Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

const updateObject = (obj, ...removeKeys) => {
  const newObj = { ...obj };

  for (const key of removeKeys) {
    delete newObj[key];
  }
  return newObj;
};

console.log("🚀 ~ updateObject", updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));
