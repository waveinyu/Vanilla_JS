/*
const loginForm = document.getElementById("");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
와 아래는 같다.
*/
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}
//Log In 버튼을 누르면 clicked가 뜨게 만들었다.
//click event를 loginButton에 연결
loginButton.addEventListener("click", onLoginBtnClick);

/*
validity of value
값의 유효성을 확인하는 건 좋은 연습이다
*/
