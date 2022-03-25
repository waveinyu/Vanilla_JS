//const and let
const a = 5;
const b = 2;
let myName = "Ruby";
/*
variable
const : 절대 변하지 않는 것
let : 추후 변할 수 있는 것(업데이트)
*/

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);

myName = "Lunaby"; //updating
console.log("Your new name is " + myName);

//boolean
const amICute = true;
let something; //undefined
console.log(amICute);

//Arrays
const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
dayOfWeek.push("sun");
console.log(dayOfWeek[6]);

//Objects (properties)
const player = {
  name: "Ruby",
  points: 10,
  cute: true,
};
console.log(player);
player.name = "tomato";
console.log(player);

console.log(player.cute);
player.cute = false;
console.log(player.cute);

console.log(player.points);
player.points = player.points + 15;
console.log(player.points);

function sayHello(nameOfPerson, age) {
  console.log(
    "Hello, my name is " + nameOfPerson + " and I'm " + age + " olds."
  );
}

const nct = {
  name: "Doyoung",
  age: 27,
  unit: "nct 127",
  sayHello: function (otherPersonName) {
    console.log("Hello! " + otherPersonName + ", Nice to meet you.");
  },
};

console.log(nct.name);
nct.sayHello("jaehyun");

console.log(nct.name);
nct.name = "Mark";
console.log(nct.name);

console.log(nct.unit);
nct.unit = "nct dream";
console.log(nct.unit);

console.log(nct);

const nct2020 = ["doyoung", "jaehyun", "haechan", "jungwoo"];
console.log(nct2020);
nct2020.push("johnny");
console.log(nct2020);
nct.age = nct.age - 3;
console.log(nct.age);

// function : 계속 반복해서 사용할 수 있는 코드 조각
// NaN : Not a Number

function plus(a, b) {
  console.log(a + b);
}

plus(2, 5);

function minus(a, b) {
  console.log(a - b);
}

minus(5, 1);

function divide(a, b) {
  console.log(a / b);
}
divide(30, 15);
