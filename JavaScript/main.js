// console.log("Hello JavaScript");
// console.warn("This is a warning");
// console.error("This is a error");
//Variables
// var firstName = 'Nabendu';
// let lastName = 'Biswas';
// const fullName = 'Nabendu Biswas';
// console.log(firstName);
// console.log(lastName);
// console.log(fullName);

// function varExp() {
//     if(true) {
//         var num1 = 10;
//         console.log("Inside if var " + num1);
//     }
//     console.log("Outside if var " + num1);
// }

// varExp()
// console.log("Outside function var " + num1);


// if(true) {
//     let num2 = 20;
//     console.log("Inside if let " + num2);
// }
// console.log("Outside if let " + num2);

//Datatypes- String, Numbers, Boolean, null, undefined, Symbol.
// const name = 'Nabendu';
// const age = 40;
// const rating = 9.5;
// const isDeveloper = true;
// const x = null;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isDeveloper);
// console.log(typeof x);
// console.log(typeof z);

// String Concatenation
// const name = 'Nabendu';
// const age = 40;

// console.log('My name is ' + name + ' and i am ' + age + ' year\'s old.');
// console.log(`My name is ${name} and iam ${age} year's old.`);

//String Methods
// const str = 'Hello JavaScript';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(0,7));
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));

//Array
// const lang = ['JavScript', 'Java', 'C++', 'Golang', 'Kotlin', 5, true];
// console.log(lang[2]);

// lang[3] = 'C';
// console.log(lang);

// lang.pop();
// lang.pop();
// console.log(lang);

// lang.push('Pascal');
// lang.unshift('Swift');
// console.log(lang);

// lang.shift();
// console.log(lang);

// console.log(Array.isArray(lang));
// console.log(Array.isArray('C'));
// console.log(lang.includes('Java'));
// console.log(lang.includes('Cobol'));

//Objects
// const person = {
//     firstName: 'Nabendu',
//     'last Name': 'Biswas',
//     age: 40,
//     isDeveloper: true
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person['last Name']);

//Loops
// for(let i=0; i<=10; i++) {
//     console.log(`Loop Number - ${i}`);
// }

// let i=0;
// while(i<=10) {
//     console.log(`Loop Number - ${i}`);
//     i++;
// }

// let i=0;
// do {
//     console.log(`Loop Number - ${i}`);
//     i+=11;
// } while(i<=10)

//Arrays of object
// const lang = [
//     {id: 1, name: 'Pascal', year: 1970},
//     {id: 2, name: 'C', year: 1972},
//     {id: 3, name: 'C++', year: 1985},
//     {id: 4, name: 'Java', year: 1995},
//     {id: 5, name: 'JavaScript', year: 1995},
//     {id: 6, name: 'Kotlin', year: 2011}
// ];

// for(let i=0; i<lang.length; i++) {
//     console.log(lang[i].id)
// }

//for..of loop
// for(let l of lang){
//     console.log(l.name)
// }

//forEach loop
// lang.forEach(item => console.log(item.year));

//Conditionals
// const x = '10';
// if(x == 10) {
//     console.log('x is 10');
// }

// const y = '20';
// if(y === 20){
//     console.log('y is 20');
// }else{
//     console.log('y is string 20');
// }

// const z = 59;
// if(z > 100) {
//     console.log('z is greater than 100');
// } else if(z > 80) {
//     console.log('z is greater than 80');
// } else if(z > 60) {
//     console.log('z is greater than 60');
// } else if(z > 40) {
//     console.log('z is greater than 40');
// } else {
//     console.log('z is less then 40');
// }

//OR and AND Operators
// const x = 20;
// const y = 30;

// if(x === 20 || y === 40){
//     console.log('Any one of the statement is true');
// }

// if(x === 20 && y === 30){
//     console.log('Both of the statement are true');
// }

//Ternary operator
// const z = 10;
// let color;

// if(z > 10){
//     color = 'red'
// } else {
//     color = 'blue'
// }

// console.log(color);

// const color2 = z>9 ? 'red' : 'blue';
// console.log(color2);

//Switch statements
// const color = 'blue';

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     case 'green':
//         console.log('color is green');
//         break;
//     case 'yellow':
//         console.log('color is yellow');
//         break;
//     default:
//         console.log('No color was matched')
// }

//Functions
//Method#1 - Function decleration
function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(20, 30);

//Method#2 - Function expressions
const multiNums = function(num1, num2) {
    return num1 * num2;
}

console.log(multiNums(20, 30));

//Method#3 - Arrow Functions
const modNums = (num1, num2) => {
    return num1 % num2;
}

console.log(modNums(50, 30));

//Method#4 - Condensed Arrow Functions
const divNums = num1 => num1 / 20;

console.log(divNums(50));


