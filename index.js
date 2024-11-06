// alert displays to the user
alert(`Hello`);

// console.log displays in the dev tools -> console tab
console.log('How are you all doing?');

/* 
  code that 
  I don't
  want to run 
*/


// PSEUDOCODE
// welcome the user to the page
alert('Welcome to our webpage!!!!');

// tell the user that they are awesome
alert('You are awesome!');


// VARIABLES
const age = 16;
const name = 'William Shakespeare';
console.log(age);

// variable values have data types
const cookiesEaten = 12; // number
const message = "There's 2 snakes in my boot!"; // string
const greeting = 'Greetings friend!'; // string
const goodbyeMessage = `Hasta luego!`; // string

const saying = `Billy's doctor said, "Don't run in the street!`;

const isInAntarctica = false; // boolean
const isVerySmart = true; // boolean

const blackHole = null; // null
let carName = undefined; // undefined

carName = 'Rusty Jones';

// Math with numbers
const daysToGo = 12 / 4; // 3
const remainder = 67 % 2; // 1
// console.log(remainder);

// String concatenation
const firstName = `Lucy`;
const lastName = `Ford`;
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

const favoriteNumber = `22`;
const worstNumber = `13`;
// console.log(favoriteNumber + worstNumber);

const income = 6700;
const bonus = `1200`;
// console.log(income + bonus);



// LOGICAL OPERATORS
const isSuperman = false;
const livesInCalifornia = false;
const isOlderThan21 = true;
const livesInSouthCarolina = true;

console.log(isSuperman && livesInSouthCarolina); // false
console.log(isOlderThan21 && livesInSouthCarolina); // true

console.log(isSuperman || livesInSouthCarolina); // true
console.log(isSuperman || livesInCalifornia); // false

console.log(!isSuperman); // true
console.log(!isOlderThan21); // false
console.log(!!isSuperman); // false



// COMPARISON OPERATORS
const bunnyCount = 2;
const kidCount = 2;
const furColor = `white`;
const numberAsString = `2`;
const cookieCount = 12;

console.log(bunnyCount === numberAsString); // false
console.log(bunnyCount === kidCount); // true
console.log(numberAsString === furColor); // false

console.log(bunnyCount !== furColor); // true
console.log(bunnyCount !== kidCount); // false
console.log(kidCount !== numberAsString); // true

console.log(bunnyCount > kidCount); // false
console.log(cookieCount > kidCount); // true
console.log(cookieCount > numberAsString); // true

console.log(cookieCount < kidCount); // false
console.log(kidCount < bunnyCount); // false
console.log(kidCount < cookieCount); // true

console.log(kidCount >= bunnyCount); // true
console.log(cookieCount >= bunnyCount); // true
console.log(bunnyCount >= cookieCount); // false

console.log(bunnyCount <= cookieCount); // true
console.log(kidCount <= bunnyCount); // true
console.log(cookieCount <= bunnyCount); // false