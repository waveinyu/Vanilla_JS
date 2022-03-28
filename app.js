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

// function : 계속 반복해서 사용할 수 있는 코드 조각
// function 안에서 data를 받는 법을 우린 이미 알고 있다. ex) alert();
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

const nct = {
  name: "Doyoung",
  sayHello: function (otherPersonName) {
    console.log("Hello, " + otherPersonName + "!");
  },
};

console.log(nct.name);
nct.sayHello("Jaehyun");
nct.sayHello("Mark");

const nct127 = [
  "태용",
  "태일",
  "유타",
  "쟈니",
  "도영",
  "재현",
  "정우",
  "마크",
  "해찬",
];

console.log(nct127[4]);
nct127.push("런쥔");
console.log(nct127);
nct127.pop();
console.log(nct127);

let isCute = true;
console.log(isCute);
isCute = false;
console.log(isCute);

nct127[0] = "Jeno";
console.log(nct127[0]);
//재밌다,,

console.log(nct);
nct.name = "도영";
console.log(nct.name);
nct.sayHello("마크");
nct.sexy = true;
console.log(nct);
nct.age = 27;
console.log(nct);
console.log(nct.age);

function minusFive(potato) {
  console.log(potato - 5);
}
minusFive(30, 20, 30, 40);
// console.log(potato);
//외래변수????암튼 그런 의미 potato는 body에서만 정의한다

//returns
// console.log : 콘솔에 결과를 보여주기 위한 것
// 주스를 만들고 싶은데 그걸 믹서기 안에서 꺼내지 못한다면?
// return을 한 번 하면 function은 작동을 멈추고 결과 값을 return한다(return까지만 작동한다!)
const calculator = {
  plus: function (a, b) {
    // console.log("hello");
    return a + b;
    // console.log("bye");
  },

  minus: function (a, b) {
    return a - b;
  },

  times: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  },

  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

const age = 27;
function calculateKrAge(ageOfForeigner) {
  ageOfForeigner + 2;
  return "hello";
}
// 함수는 어떤 일을 그저 수행하는 것이 아니라, 수행 후 그 결과를 알려주는 것이다.

const krAge = calculateKrAge(age);

console.log(krAge);
