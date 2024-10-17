randomNum1 = Math.floor(Math.random() * 6 + 1);
randomNum2 = Math.floor(Math.random() * 6 + 1);

var randomImageSrc = "images/dice" + randomNum1 + ".png";
var source = document.querySelectorAll("img")[0];
source.setAttribute("src", randomImageSrc);
var randomImageSrc1 = "images/dice" + randomNum2 + ".png";
var source1 = document.querySelectorAll("img")[1];
source1.setAttribute("src", randomImageSrc1);

var whoWon = document.querySelector("h1");

if (randomNum1 === randomNum2) {
  whoWon.innerHTML = "Draw!";
} else if (randomNum1 > randomNum2) {
  whoWon.innerHTML = "Player 1 Won!";
} else if (randomNum1 < randomNum2) {
  whoWon.innerHTML = "Player 2 Won!";
}
