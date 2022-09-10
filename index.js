//* variables
// selecting the body element
const changeBackground = document.body;

// selecting the links to change the page
const hexPage = document.getElementById("hex-page");
const rgbPage = document.getElementById("rgb-page");
const hslPage = document.getElementById("hsl-page");

// selecting the main wrappers
const hexWrapper = document.getElementById("hex-wrapper");
const rgbWrapper = document.getElementById("rgb-wrapper");
const hslWrapper = document.getElementById("hsl-wrapper");

// selecting the buttons to change the background
const hexColor = document.getElementById("hex-color");
const rgbColor = document.getElementById("rgb-color");
const hslColor = document.getElementById("hsl-color");

hexPage.addEventListener("click", function () {
  if (hexPage.style.textDecoration != "underline") {
    hexWrapper.style.display = "block";
    rgbWrapper.style.display = "none";
    hslWrapper.style.display = "none";
    hexPage.style.textDecoration = "underline";
    rgbPage.style.textDecoration = "none";
    hslPage.style.textDecoration = "none";
    changeBackground.style.backgroundColor = hexColor.textContent;
  }
});

rgbPage.addEventListener("click", function () {
  if (rgbPage.style.textDecoration != "underline") {
    hexWrapper.style.display = "none";
    rgbWrapper.style.display = "block";
    hslWrapper.style.display = "none";
    hexPage.style.textDecoration = "none";
    rgbPage.style.textDecoration = "underline";
    hslPage.style.textDecoration = "none";
    changeBackground.style.backgroundColor = rgbColor.textContent;
  }
});
hslPage.addEventListener("click", function () {
  if (hslPage.style.textDecoration != "underline") {
    hexWrapper.style.display = "none";
    rgbWrapper.style.display = "none";
    hslWrapper.style.display = "block";
    hexPage.style.textDecoration = "none";
    rgbPage.style.textDecoration = "none";
    hslPage.style.textDecoration = "underline";
    changeBackground.style.backgroundColor = hslColor.textContent;
  }
});

// console.log(Math.random())
// logs out 0.5408145050563944
// console.log(Math.random() * 10)
// logs out 5.408145050563944
// console.log(Math.floor(Math.random() * 10))
// logs out 5
// The Math.random() function, when called, always
//  returns a random decimal number between 0 and 1

// const hexColor = document.getElementById(".hex-color");
// const rgbColor = document.getElementById(".rgb-color");
// const hslColor = document.getElementById(".hsl-color");

// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
// let randomNumberValue;
// hexColor.addEventListener("click", function () {
//   let hexColorValue = "#";
//   for (let i = 0; i < 6; i++) {
//     randomNumberValue = Math.floor(Math.random() * hex.length);
//     hexColorValue += hex[randomNumberValue];
//   }
//   hexColor.textContent = hexColorValue;
//   changeBackground.style.background = hexColorValue;
// });

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let randomNumberValue;

hexColor.addEventListener("click", function () {
  // saves the new background color
  let hexColorValue = "#";
  // randomly picks a value in the array and adds it to the background color above
  for (let i = 0; i < 6; i++) {
    randomNumberValue = Math.floor(Math.random() * hex.length);
    hexColorValue += hex[randomNumberValue];
  }
  // changes the text inside the button
  hexColor.textContent = hexColorValue;
  // changes the background color
  changeBackground.style.background = hexColorValue;
});

rgbColor.addEventListener("click", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  const rgbColorValue = `rgb(${a}, ${b}, ${c})`;
  rgbColor.textContent = rgbColorValue;
  changeBackground.style.background = rgbColorValue;
});

hslColor.addEventListener("click", function () {
  let a = Math.floor(Math.random() * 361);
  let b = Math.floor(Math.random() * 101);
  let c = Math.floor(Math.random() * 101);
  const hslColorValue = `rgb(${a}, ${b}%, ${c}%)`;
  hslColor.textContent = hslColorValue;
  changeBackground.style.background = hslColorValue;
});
