const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
/*
onLoginSubmit function이 하나의 argument을 받도록 하고 그 정보를 JavaScript에 넘겨주고 있다
우리가 argument 공간만 제공하면 JavaScript가 알아서 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣을 것

결과) 방금 실행된 event에 대한 여러 정보들을 담고 있다
SubmitEvent {isTrusted: true, submitter: input, type: 'submit', 
target: form#login-form, currentTarget: form#login-form, …}
*/

loginForm.addEventListener("submit", onLoginSubmit);

// 아무것도 하지 않으믕로써 JavaScript가 어떤 정보를 담은 채로 function을 호출한다는 걸 배웠다
// preventDefault() : 브라우저의 기본 동작을 막아준다
