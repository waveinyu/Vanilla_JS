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
let something;
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
