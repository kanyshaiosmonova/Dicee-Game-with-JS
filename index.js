let randomNumber1 = Math.floor(Math.random() * 6)+ 1;
let randomImage1 = "dice" + randomNumber1 + ".png";
let randomImageSource1 = "images/" + randomImage1;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);



let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/dice" + randomNumber2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if( randomImage1 > randomImage2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomImage2 > randomImage1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}