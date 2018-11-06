window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame()

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






