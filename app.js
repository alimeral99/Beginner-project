const colorText = document.querySelector(".colortext");
const startRandom_btn = document.querySelector(".startRandom_btn");
const stop_btn = document.querySelector(".stop_btn");

displayColor();

startRandom_btn.addEventListener("click", function () {
  displayColor();
});

stop_btn.addEventListener("click", function () {
  clearInterval(randomInterwol);
});

function displayColor() {
  randomInterwol = setInterval(function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    colorText.textContent = "#" + randomColor;
  }, 1000);
}
