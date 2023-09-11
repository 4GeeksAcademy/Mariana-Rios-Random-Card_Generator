/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  //write your code here
  let randSuit = Math.floor(Math.random() * 4);
  let randNum = Math.floor(Math.random() * 13);

  let valueArr = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardValue = document.querySelector("#cardValue");
  cardValue.innerHTML = valueArr[randNum];

  let suitArr = ["♦", "♥", "♠", "♣"];
  let suitValue = document.querySelectorAll(".suitValue");
  // suitValue[0].innerHTML = suitArr[randSuit];
  // suitValue[1].innerHTML = suitArr[randSuit];
  //querySelectorAll returns node list so use (above stuff) or for each:
  suitValue.forEach(function(suit) {
    let suitVal = suitArr[randSuit];
    suit.innerHTML = suitVal;
    suit.style.color = "black";
    if (suitVal === "♦" || suitVal === "♥") {
      suit.style.color = "red";
    }
  });
}

//to generate new card when refreshing:
// window.onload = generateCard();

const button = document.querySelector("#button");
button.addEventListener("click", () => {
  generateCard();
});

//to generate a new card evert 10 seconds:
// window.setInterval(function() {
//   generateCard();
// }, 10000);
