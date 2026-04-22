// Declaring variables
let surnameInput = document.getElementById("surname");
let blendBtn = document.getElementById("blend");
let fontsOptions = document.getElementById("font");
let outputSection = document.getElementById("output");
let sequencialCheck = document.getElementById("sequential");
let randomCheck = document.getElementById("random");
let reverseCheck = document.getElementById("reverse");
let changeOutputBtn = document.getElementById("changeOutput");
let colorsOptions = document.getElementById("textColor");
let fontSizeInput = document.getElementById("fontSize");
let uiColorPicker = document.getElementById("colorPicker");
let uiLetterSpacing = document.getElementById("letterSpacing");
let uiLetterSize = document.getElementById("letterSize");
let changeUiBtn = document.getElementById("changeUI");

// Helper functions
function splitSurname(str) {
  return str.split("");
}

function applyFont(element, dropDown) {
  if (dropDown.tagName !== "SELECT") {
    alert("Couldn't apply font...");
  } else {
    element.style.fontFamily = dropDown.selectedOptions[0].text;
  }
}

function displaySequencially(array, div) {
  let interval = 0;
  div.style.position = "relative";
  array.forEach((element) => {
    interval += 15;
    let char = document.createElement("span");
    char.textContent = element;
    char.style.position = "absolute";
    char.style.transform = `translate(${interval}px, ${interval}px)`;
    div.appendChild(char);
  });
}

function displayRandomly(array, div) {
  div.style.position = "relative";
  array.forEach((element) => {
    let xCoordinate = Math.floor(Math.random() * 300);
    let yCoordinate = Math.floor(Math.random() * 100);
    let char = document.createElement("span");
    char.textContent = element;
    char.style.position = "absolute";
    char.style.transform = `translate(${xCoordinate}px, ${yCoordinate}px)`;
    div.appendChild(char);
  });
}

function changeOutputColor(element, dropdown) {
  if (dropdown.tagName !== "SELECT") {
    alert("Couldn't change color...");
  } else {
    element.style.color = dropdown.selectedOptions[0].value;
  }
}

function changeFontsize(element, size) {
  element.style.fontSize = size + "px";
}

// Applying default styles
outputSection.style.fontSize = "16px";
outputSection.style.width = "350px";
outputSection.style.height = "150px";

// Event listeners
blendBtn.addEventListener("click", function () {
  outputSection.innerHTML = "";
  let surname = surnameInput.value.toLowerCase();
  if (surname === "") {
    alert("Surname input field is empty!");
    return;
  }
  let splittedChars = splitSurname(surname);

  applyFont(outputSection, fontsOptions);
  if (sequencialCheck.checked) {
    displaySequencially(splittedChars, outputSection);
  }

  if (randomCheck.checked) {
    displayRandomly(splittedChars, outputSection);
  }

  if (reverseCheck.checked) {
    splittedChars.reverse();
    displaySequencially(splittedChars, outputSection);
  }
});

changeOutputBtn.addEventListener("click", function () {
  changeOutputColor(outputSection, colorsOptions);
  let newFontSize = fontSizeInput.value;
  changeFontsize(outputSection, newFontSize);
});

uiColorPicker.addEventListener("change", function() {
    outputSection.style.color = uiColorPicker.value;
});

uiLetterSpacing.addEventListener("change", function() {
    outputSection.style.letterSpacing = uiLetterSpacing.value + "px";
})

uiLetterSize.addEventListener("change", function() {
    outputSection.style.fontSize = uiLetterSize.value + "px";
})