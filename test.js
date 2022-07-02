const container = document.createElement("div");
container.className = "container";

const form = document.createElement("form");
form.className = "form";

const inputBlue = document.createElement("input");
inputBlue.className = "blue input";
inputBlue.placeholder = "BLUE";
inputBlue.maxLength = "3";

const inputRed = document.createElement("input");
inputRed.className = "red input";
inputRed.placeholder = "RED";
inputRed.maxLength = "3";

const inputGreen = document.createElement("input");
inputGreen.className = "green input";
inputGreen.placeholder = "GREEN";
inputGreen.maxLength = "3";
inputGreen.min = "1";
inputGreen.max = "255";

const formTitle = document.createElement("h1");
formTitle.className = "title";
formTitle.textContent = "Input digit for each block:";
formTitle.style.textTransform = "upperCase";

const blockRed = document.createElement("div");
blockRed.className = "blockRed";
blockRed.append(inputRed);

const blockGreen = document.createElement("div");
blockGreen.className = "blockGreen";
blockGreen.append(inputGreen);

const blockBlue = document.createElement("div");
blockBlue.className = "blockBlue";
blockBlue.append(inputBlue);

const button = document.createElement("button");
button.className = "button";
button.textContent = "SUBMIT";

const block = document.createElement("div");
block.className = "new-block";

form.append(blockRed, blockGreen, blockBlue);
container.append(formTitle, form, button, block);
document.body.append(container);

inputGreen.onchange = function (e) {
  var value = parseInt(e.target.value);
  if (!value || value <= 0 || value > 255) {
    if (value > 255) {
      e.target.value = 255;
    } else if (!value) {
      e.target.value = 0;
    } else if (value <= 0) {
      e.target.value = 0;
    }
  }
};

inputBlue.onchange = function (e) {
  var value = parseInt(e.target.value);
  if (!value || value <= 0 || value > 255) {
    if (value > 255) {
      e.target.value = 255;
    } else if (!value) {
      e.target.value = 0;
    } else if (value <= 0) {
      e.target.value = 0;
    }
  }
};

inputRed.onchange = function (e) {
  var value = parseInt(e.target.value);
  if (!value || value <= 0 || value > 255) {
    if (value > 255) {
      e.target.value = 255;
    } else if (!value) {
      e.target.value = 0;
    } else if (value <= 0) {
      e.target.value = 0;
    }
  }
};

function rgb(inputRed, inputGreen, inputBlue) {
  inputRed > 255 ? (inputRed = 255) : "";
  inputGreen > 255 ? (inputGreen = 255) : "";
  inputBlue > 255 ? (inputBlue = 255) : "";
  inputRed < 0 ? (inputRed = 0) : "";
  inputGreen < 0 ? (inputGreen = 0) : "";
  inputBlue < 0 ? (inputBlue = 0) : "";

  let rColor = Number(inputRed.value).toString(16).toUpperCase();
  let gColor = Number(inputGreen.value).toString(16).toUpperCase();
  let bgColor = Number(inputBlue.value).toString(16).toUpperCase();

  if (rColor.length === 1) {
    rColor = "0" + rColor;
  } else {
    rColor = rColor;
  }
  if (gColor.length === 1) {
    gColor = "0" + gColor;
  } else {
    gColor = gColor;
  }
  if (bgColor.length === 1) {
    bgColor = "0" + bgColor;
  } else {
    bgColor = bgColor;
  }
  const color = "#" + rColor + gColor + bgColor;

  return color;
}

function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function randomColor() {
  const colors = [
    "#5776b9",
    "#d9051b",
    "#ffdb03",
    "#42a60b",
    "#fee610",
    "#fc614d",
    "#63bb43",
    "#71a9d8",
  ];
  const index = random(0, colors.length);
  return colors[index];
}

button.addEventListener("click", () => {
  block.style.color = randomColor();
  block.style.background = rgb(inputRed, inputGreen, inputBlue);
  block.innerHTML = `Your Color:<br>${rgb(inputRed, inputGreen, inputBlue)}`;
});
