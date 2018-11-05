window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame()

  };

  function startGame() {
    var game = new Game("canvas",4,3);
  }

 
  setCanvasDimensions();
  window.onresize = setCanvasDimensions;
};

function setCanvasDimensions() {
    var canvasDOMElement = document.querySelector('canvas');
    canvasDOMElement.setAttribute("height", window.innerHeight)
    canvasDOMElement.setAttribute("width", window.innerWidth)
}






