var types = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
var typesMiddle = ["8", "9", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let symbol = types[getRandomInt(0, 4)];
let number = typesMiddle[getRandomInt(0, 11)];
let simbolo = "";

window.onload = () => {
  document.querySelector(".bottom-suit").innerHTML = symbol;
  document.querySelector(".number").innerHTML = number;
  document.querySelector(".top-suit").innerHTML = symbol;
};
console.log(symbol);

if (symbol == "&hearts;") {
  simbolo = "heart";
  document.querySelector(".bottom-suit").classList.add(simbolo);
  document.querySelector(".top-suit").classList.add(simbolo);
} else if (symbol == "&diams;") {
  simbolo = "diamont";
  document.querySelector(".bottom-suit").classList.add(simbolo);
  document.querySelector(".top-suit").classList.add(simbolo);
} else {
  document.querySelector(".bottom-suit").classList.add(symbol);
  document.querySelector(".top-suit").classList.add(symbol);
}
