var types = ["&spades;", "&clubs;", "&hearts;", "&diams;"]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let symbol = types[getRandomInt(0, 4)]
let simbolo = ""

window.onload = () => {
  document.querySelector('.top-suit').innerHTML = symbol;
  document.querySelector('.bottom-suit').innerHTML = symbol;
}
console.log(symbol)

if (symbol == "&hearts;") {
  simbolo = "heart"
  document.querySelector('.bottom-suit').classList.add(simbolo);
  document.querySelector('.top-suit').classList.add(simbolo);
} else if (symbol == "&diams;") {
  simbolo = "diamont"
  document.querySelector('.bottom-suit').classList.add(simbolo);
  document.querySelector('.top-suit').classList.add(simbolo);
}
else {
  document.querySelector('.bottom-suit').classList.add(symbol);
  document.querySelector('.top-suit').classList.add(symbol);
}