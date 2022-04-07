const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//string만 포함되고, 그다지 중요한 내용이 아닌 변수는 대문자로 표기(관슴)

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username} 안녕`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*
form은 사라졌지만 입력값은 console에 기록됐다.
*/

loginForm.addEventListener("submit", onLoginSubmit);
