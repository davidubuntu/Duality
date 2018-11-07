window.onload = function() {
var satarButton = document.getElementById("startGame");
var container = document.getElementById("top-container");
var presentation = document.getElementById("presentation")

satarButton.onclick = function() {
    startGame();
    container.style.display = "block";
    presentation.style.display = "none";
};


  setCanvasDimensions();
  window.onresize = setCanvasDimensions;
}

function startGame() {
  var game = new Game("canvas",0);
}

function setCanvasDimensions() {
    var canvasDOMElement = document.querySelector('canvas');
    canvasDOMElement.setAttribute("height", window.innerHeight);
    canvasDOMElement.setAttribute("width", window.innerWidth);
}






