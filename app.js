const h1 = document.querySelector(".hello:first-child h1");
console.dir(h1);

//on- : events, 모두 JavaScript object

function handleTitleClick() {
  h1.style.color = "whitesmoke";
  h1.innerText = "h1 was clicked!";
}

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("Copier!");
}

function handleWindowOffline() {
  alert("SOS No Wifi");
}

function handleWindowOnline() {
  alert("All Good");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
