
var number1 = 6;
var number2 = 6;
function randomNumber1() {
  number1 = (Math.floor((Math.random()) * 6)) + 1;
  var randomImage1 = "images/dice" + number1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

}


function randomNumber2() {
  number2 = (Math.floor((Math.random()) * 6)) + 1;
  var randomImage2 = "images/dice" + number2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomImage2);

}

function drawWinner() {
  var delta = number1 - number2;
  if (delta > 0) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  }
  else if (delta < 0) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector("button.roll").onclick = function diceRoll(){
  randomNumber1();
  randomNumber2();
  drawWinner();
}
