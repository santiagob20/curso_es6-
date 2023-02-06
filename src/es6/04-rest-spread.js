// Arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);

let user = { username: "Santiagob", age: 27 };
let { username, age } = user;
console.log(username, age);



// Spread operator
let person = { name: 'Santiago', age: 27 };
let country = 'COL';

let data = {...person, country };
console.log(data);

// Rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3, 4, 5);