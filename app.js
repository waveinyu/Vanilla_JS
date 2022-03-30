const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "whitesmoke") {
    newColor = "tomato";
  } else {
    newColor = "whitesmoke";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

// step 1. Seek elements
// step 2. Listen event
// step 3. React that event
