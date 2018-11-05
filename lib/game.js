function Game(canvasId,height,width) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.height = height;
  this.canvas.width = width;
  this.fps = 60;
  this.getCoordinates();
  this.reset();
  setTimeout(function(){
    this.drawAll();
  }.bind(this), 500)
  
}

Game.prototype.drawAll = function(){
    this.background.draw();
    this.matrixPlayer.draw();
    this.matrixGame.draw();

}
Game.prototype.reset = function(){
   
    this.background  = new Background(this);
    this.matrixPlayer = new Board(this,'player');
    this.matrixGame = new Board(this,'game');
}

Game.prototype.getCoordinates =  function (){
    var canvas = document.getElementById('canvas');
    canvas.addEventListener('click', on_canvas_click, false);
    function on_canvas_click(ev) {
        var x = ev.clientX - canvas.offsetLeft;
        var y = ev.clientY - canvas.offsetTop;
         alert(`${x},${y}`);
        // ... x,y are the click coordinates relative to the
        // canvas itself
    }
}

  // Create random game-squares and pushes it into squares array
