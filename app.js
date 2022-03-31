const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
  //toggle은 classList에 clicked class가 이미 있는지 확인해서 만약 있다면,
  //toggle이 clicked를 제거해주고,
  //만일 clicked가 없다면 toggle이 clicked를 추가해준다.
}

h1.addEventListener("click", handleTitleClick);
