const button = document.querySelector("button"); //select the button
const h1 = document.querySelector("h1"); //select the h1

button.addEventListener("click", function () {
  //add click event to button
  const newColor = makeRandColor(); //random select a rgb
  document.body.style.backgroundColor = newColor; // set style to background
  h1.innerText = newColor; // set text string the rgb result
});

const makeRandColor = () => {
  //make a new function
  const r = Math.floor(Math.random() * 255); //add a random number
  const g = Math.floor(Math.random() * 255); //add a random number
  const b = Math.floor(Math.random() * 255); //add a random number
  return `rgb(${r}, ${g}, ${b})`; //set a string e.g rgb(255,255, 2555)
};
