let age = 15;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}

// LOOPS
// for loop
for (let i = 1; i <= 3; i++) {
  console.log("For Loop count:", i);
}

// while loop
let count = 1;
while (count <= 3) {
  console.log("While Loop count:", count);
  count++;
}

// do while loop
let num = 1;
do {
  console.log("Do While Loop count:", num);
  num++;
} while (num <= 3);

// FUNCTIONS
function greet(name) {
    
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));


let person = {
  name: "John",
  age: 25,
  city: "Delhi"
};
console.log("Person's name:", person.name);