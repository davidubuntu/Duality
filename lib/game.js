function Game(canvasId, height, width) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.height = height;
    this.canvas.width = width;
    this.fps = 60;
    this.xSelected = 0;
    this.ySelected = 0;
    this.getCoordinates();
    this.reset();
    setTimeout(function () {
        this.drawAll();
    }.bind(this), 500)
    //this.ballSelected();

}

Game.prototype.drawAll = function () {
    this.background.draw();
    this.matrixPlayer.draw();
    this.matrixGame.draw();

}
// Reset
Game.prototype.reset = function () {
    this.background = new Background(this);
    this.matrixPlayer = new Board(this, 'player');
    this.matrixGame = new Board(this, 'game');
}

Game.prototype.getCoordinates = function () {
    //x,y are the click coordinates relative to the canvas itself
    this.canvas.addEventListener('click',function (ev) {
        this.xSelected = ev.clientX - canvas.offsetLeft;
        this.ySelected = ev.clientY - canvas.offsetTop;
      //  alert(`${this.xSelected},${this.ySelected}`);
        this.ballSelected();
    }.bind(this), false);

}

// Iteration over MatrixPlayer and get coordinates of each item
Game.prototype.ballSelected = function () {; //each row is a new array (bidimensional array)
    var board = this.matrixPlayer.board;
    console.log(board);
    board.forEach(function (row, rowIndex) {
        // row is a matrix
        row.forEach(function (ball, ballIndex) {
            var radius = ball.radius;
            var ballX = ball.x;
            var ballY = ball.y;
            console.log(radius)

            if((ballX -radius)<= this.xSelected&&
            this.xSelected <=(ballX +radius) &&
               (ballY - radius)<= this.ySelected&&
               this.ySelected<=(ballY +radius)){
                ball.toggleValue();
                this.matrixPlayer.draw();
                this.compareMatrix();
            }
        }.bind(this));
    }.bind(this));

}

Game.prototype.compareMatrix = function(){


}