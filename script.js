var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function () {
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColorG();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.background = none;
    }
  }
});

hardButton.addEventListener("click", function () {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColorG();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  colors = generateRandomColors(numSquares);
  pickedColor = randomColorG();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < numSquares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  for(var i=0;i<squares.length; i++){
    squares[i].style.background = color;
  }
}

function randomColorG(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(genColor){
  var arr = [];
  for(var i=0; i<genColor; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb("+ r + "," + g + "," + b + ")";
}
