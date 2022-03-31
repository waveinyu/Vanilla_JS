// step 1. Seek elements
// step 2. Listen event
// step 3. React that event
const h1 = document.querySelector("div.hello:first-child h1");

//string을 변수에 저장하는 게 훨씬 좋다
function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === "clickedClass") {
    h1.className = "";
  } else {
    h1.className = "clickedClass";
  }
}

//h1.className : getter이자 setter
//"active" : String .. 오타로 인한 에러의 가능성이 많음 -> raw String

h1.addEventListener("click", handleTitleClick);
