const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log("Hello", loginInput.value);
}
//Log In 버튼을 누르면 clicked가 뜨게 만들었다.
//click event를 loginButton에 연결
loginButton.addEventListener("click", onLoginBtnClick);
