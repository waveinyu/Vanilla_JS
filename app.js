const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  // const clickedClass = "clicked sexy-font";
  // 이 방법은 그다지 좋지 않다.

  //classList가 clicked를 포함하고 있는지 확인하는 것
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
    //raw string 대신 const를 썼기 때문에 ""는 필요하지 않다.
  }
}

h1.addEventListener("click", handleTitleClick);
//최초의 className이 사라지고, 우리는 sexy-font란 className를 간직하고 싶다.
//sexy-font를 삭제하지 않고 clicked class를 변경하고 싶을 땐 어떻게 해야할까?
