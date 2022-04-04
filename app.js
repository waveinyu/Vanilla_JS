const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); //어떤 이벤트든지 액션이 발생하지 않게 막는 것
  console.log(loginInput.value);
}
//누군가 form을 submit하면 브라우저는 기본적으로 페이지를 새로고침하게 되어있다.
//preventDefault는 그 기본 동작을 막는 것

loginForm.addEventListener("submit", onLoginSubmit);
