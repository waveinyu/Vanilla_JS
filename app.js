const title = document.querySelector(".hello:first-child h1");
console.dir(title);

//on- : events, 모두 JavaScript object

function handleTitleClick() {
  title.style.color = "whitesmoke";
  title.innerText = "title was clicked!";
}

function handleMouseEnter() {
  title.innerText = "mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
//handleTitleClick에 괄호(실행버튼)를 넣지 않는 건 매우 중요
//왜냐하면, 우리가 직접 실행하는 게 아니라 자바스크립트가 해주기를 바라는 것이기 때문!

//event를 찾고 싶을 때? APIs가 들어간 게시글을 찾기
//API : JavaScript관점의 html elements
