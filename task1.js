////////////////// Number 1
var name = "Emils";
console.log(name);
name = "Edvards";
console.log(name);

////////////////// Number 2
let number = 1;
if (number === 1) {
  console.log(`${number}, it is true`);
} else if (number === 2) {
  console.log("2");
} else {
  console.log("variable without a value");
}

////////////////// Number 3
for (var i = 0; i < 10; i++) {
  console.log(i + 1);
}

////////////////// Number 4
let func = (p1, p2, p3) => {
  let result = p1 + p2 + p3;
  return result;
};

let funcResult = func(10, 20, 30);
console.log(funcResult);
let funcResult2 = func(20, 20, 30);
console.log(funcResult2);

//////////////////// ARRAYS AND OBJECTS
/////////////// Task 1
let arr = ["privet", "loftschool"];
arr.push("ja izuchaju", "javascript");
console.log(arr);
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/////////////// Task 2
let newArr = [1, 2, 40, 120, 300, 200, 50, 257, 30, 450];
for (var i = 0; i < newArr.length; i++) {
  if (newArr[i] > 100) {
    console.log(newArr[i]);
  }
}

/////////////// Task 3
let obj = {
  name: "Emils",
  lastName: "Laganovskis",
  age: 21
};

console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj.city = "Rezekne";
console.log(obj.city);

//////////////// Task 4
function hello(human) {
  return `Привет, меня зовут ${human.name} ${human.lastName} и мне ${
    human.age
  } лет!`;
}

let helloFunc = hello(obj);
console.log(helloFunc);
