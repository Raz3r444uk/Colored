const container = document.createElement("div");
container.className = "container";

const form = document.createElement("form");
form.className = "form";

const inputBlue = document.createElement("input");
inputBlue.className = "blue input";
inputBlue.placeholder = "BLUE";
inputBlue.maxLength = "3";
inputBlue.style.border = "2px solid blue";
inputBlue.style.background = "rgb(88, 88, 247)";

const inputRed = document.createElement("input");
inputRed.className = "red input";
inputRed.placeholder = "RED";
inputRed.maxLength = "3";
inputRed.style.border = "2px solid red";
inputRed.style.background = "#ff9b9b";

const inputGreen = document.createElement("input");
inputGreen.className = "green input";
inputGreen.placeholder = "GREEN";
inputGreen.maxLength = "3";
inputGreen.style.border = "2px solid green";
inputGreen.style.background = "rgb(0, 255, 0)";

const formTitle = document.createElement("h1");
formTitle.className = "title";
formTitle.textContent = "Введите число для каждого блока:";

form.append(formTitle, inputRed, inputBlue, inputGreen);
container.append(form);
document.body.append(container);

// function createBlock() {}

// function rgb(r, g, b) {
//   r > 255 ? (r = 255) : "";
//   g > 255 ? (g = 255) : "";
//   b > 255 ? (b = 255) : "";
//   r < 0 ? (r = 0) : "";
//   g < 0 ? (g = 0) : "";
//   b < 0 ? (b = 0) : "";

//   let rColor = r.toString(16).toUpperCase();
//   let gColor = g.toString(16).toUpperCase();
//   let bgColor = b.toString(16).toUpperCase();

//   if (rColor.length === 1) {
//     rColor = "0" + r;
//   } else {
//     rColor = rColor;
//   }
//   if (gColor.length === 1) {
//     gColor = "0" + gColor;
//   } else {
//     gColor = gColor;
//   }
//   if (bgColor.length === 1) {
//     bgColor = "0" + bgColor;
//   } else {
//     bgColor = bgColor;
//   }
// }

// rgb(300, 255, 255);
