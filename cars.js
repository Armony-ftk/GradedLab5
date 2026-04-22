//Declaring variables
let makeNames = ["vw", "bmw", "benz", "audi", "ford", "toyota"];
let carsDetails = [
  ["ford", "1", "ford1.jpg"],
  ["audi", "80", "Audi80.jpeg"],
  ["bmw", "1500", "BMW1500.jpeg"],
  ["ford", "T", "FordT.jpeg"]
];

let dropList = document.getElementById("make-list");
let guessBtn = document.getElementById("guess-btn");
let carName = document.getElementById("car-name"),
  carType = document.getElementById("car-type"),
  carImg = document.getElementById("car-img");
let correctGuesses = document.getElementById("correct");
let totalGuesses = document.getElementById("total");
let totalCount = 0,
  correctCount = 0;
let selectedCar;

//Populate the dropdown with elements from array
makeNames.forEach((makeName) => {
  let option = document.createElement("option");
  option.value = makeName;
  option.text = makeName.toUpperCase();
  dropList.appendChild(option);
});