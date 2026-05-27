const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.querySelector("h1");
const rollButton = document.querySelector(".roll-btn");

function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  if (img1 && img2 && title) {
    img1.src = `images/dice${randomNumber1}.png`;
    img2.src = `images/dice${randomNumber2}.png`;

    if (randomNumber1 > randomNumber2) {
      title.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      title.textContent = "Player 2 Wins! 🚩";
    } else {
      title.textContent = "Draw!";
    }
  }
}

rollButton?.addEventListener("click", rollDice);
