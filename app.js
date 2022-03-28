// function is run from internal to external
const age = parseInt(prompt("How old are you?"));

//isNaN returns type of boolean
if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
  // condition === true
} else if (age < 18) {
  console.log("You are too young to drink alcohol!");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink!");
} else if (age > 50 && age <= 80) {
  console.log("Think you health . . . ");
} else if (age === 100) {
  console.log("WOW You are wise");
} else if (age > 80) {
  console.log("You can do whatever you want . . .");
}

true || true === true;
true || false === true;
false || true === true;
false || false === false;

true && true === true;
true && false === true;
false && true === true;
false && false === false;

if ((a && b) || (c && d) || (x && y)) {
}

// java script is interacting with user
// 클릭을 감지하는 방법, events 등등..
