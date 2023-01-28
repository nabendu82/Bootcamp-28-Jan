// const firstAge = 6;
// firstAge = 8;
// console.log(firstAge);

// const childAges = [5, 6, 8, 10];
// childAges = [5, 6, 8, 10, 12];
// childAges.push(12);
// console.log(childAges);

// const personObj = {name: 'Nabendu', skill: 'JS'}
// personObj.skill = 'React'
// personObj.profession = 'Developer'
// console.log(personObj)

//Default Parameters
// const isEqual = (num1, num2=20) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 === num2;
// }

// console.log(isEqual(10))
// console.log(isEqual(10, 10))

//Object literals Extensions
// let name = 'Nabendu';
// let age = 40;

// let obj = {
//     name,
//     age
// }

// console.log(obj)

//Dynamic Fields
// let ageField = 'age';

// let es6Obj = {
//     name: 'Shikha',
//     [ageField]: 40
// }

// console.log(es6Obj)

//Rest Operators
// let arrFunc = (...arr) => {
//     console.log(arr)
// }

// arrFunc(4, 2, 1, 8, 7);

//Spread Operator
// let a = [4, 2, 1, 8, 7];
// console.log(Math.min(4, 2, 1, 8, 7))
// console.log(Math.min(...a))
// console.log(Math.max(...a))

// let x1 = [1, 2],a1 = [3, 4],c1 = [9, 10];
// let d1 = [...a, ...x1, ...a1, ...c1];
// console.log(d1);

// let obj1 = { foo: 'bar', x: 42 }, obj2 = { foo: 'baz', y: 13 };
// let mergedObj = { ...obj1, ...obj2}
// console.log(mergedObj);

//Array Destructuring
// const rgb = [255, 200, 0];
// const r = rgb[0];
// const g = rgb[1];
// const b = rgb[2];

// const [r, g, b] = rgb;

// console.log(r, g, b);

//Object destructuring
// const developer = {
//     firstname: 'Nabendu',
//     lastname: 'Biswas',
//     country: 'India'
// };

// const firstname = developer.firstname;
// const lastname = developer.lastname;
// const country = developer.country;

// const { firstname, lastname, country } = developer;

// console.log(firstname, lastname, country);

//ES6 classes with constructor
// class CreateRoom {
//     constructor(name){
//         this.room = `${name}'s room`;
//     }

//     cleanRoom(soap){
//         console.log(`Cleaning ${this.room} with ${soap}`)
//     }
// }

// const nabsRoom = new CreateRoom('Nabendu');
// const hridayRoom = new CreateRoom('Hriday');

// nabsRoom.cleanRoom('Domex');
// hridayRoom.cleanRoom('Lizol');

//Classical For loop
// let family = [ 'Nabendu', 'Shikha', 'Hriday' ];

// for(let i = 0; i < family.length; i++) {
//     console.log(family[i]);
// }

// family.forEach(member => console.log(member))

//map
// let numbers = [6, 8, 10];
// let doubledNums = [];

// for(let i=0; i<numbers.length; i++){
//     doubledNums.push(numbers[i] * 2)
// }
// console.log(doubledNums)

// let doubled = numbers.map(num => num * 2);
// console.log(doubled)

//filter
let products = [
    { name: 'Samsung M21', category: 'smartphone'},
    { name: 'Samsung M31', category: 'smartphone'},
    { name: 'Macbook Air', category: 'laptop'},
    { name: 'Asus Zenbook', category: 'laptop'}
];

// let filtered = [];

// for(let i=0; i<products.length; i++){
//     if(products[i].category === 'smartphone'){
//         filtered.push(products[i])
//     }
// }

// console.log(filtered)

let filteredES6 = products.filter(item => item.category === 'laptop');

console.log(filteredES6)
