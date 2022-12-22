var dice1 = Math.floor(Math.random()*6) + 1;
var dice2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + dice1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomImageSource2 = "images/dice" + dice2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(dice1 > dice2) document.querySelector("h1").innerHTML = "🚩 Player1 wins";
else if(dice1 < dice2) document.querySelector("h1").innerHTML = "Player2  wins 🚩";
else document.querySelector("h1").innerHTML = "Draw";
 