window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame()
  };

  function startGame() {
    vargame = new Game("canvas",720,1300);
  }
};







