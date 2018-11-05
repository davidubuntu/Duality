function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.xSelected = 0;
    this.ySelected = 0;
    this.getCoordinates();
    this.reset();
    setTimeout(function () {
        this.drawAll();
    }.bind(this), 500)
    //this.ballSelected();
    this.columnL = 0;

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
    this.canvas.addEventListener('click', function (ev) {
        this.xSelected = ev.clientX - canvas.offsetLeft; 
       
        this.ySelected = ev.clientY - canvas.offsetTop;
        //  alert(`${this.xSelected},${this.ySelected}`);
      
        this.ballSelected();
    }.bind(this), false);

}

Game.prototype.compareMatrix = function () {
    for (var row = 0; row < 4; row++) {
        this.columnL = this.matrixPlayer.board[0].length-1
        for (var column = 0; column < 3; column++) {
            if( this.matrixPlayer.board[row][this.columnL].value !== this.matrixGame.board[row][column].value){
                return false;
            }
            this.columnL--
        }
    }
    return true;
}

// Iteration over MatrixPlayer and get coordinates of each item
Game.prototype.ballSelected = function () {; //each row is a new array (bidimensional array)
    var board = this.matrixPlayer.board;
    board.forEach(function (row, rowIndex) {
        // row is a matrix
        row.forEach(function (ball, ballIndex) {
            var radius = ball.radius;
            var ballX = ball.x;
            var ballY = ball.y;
            if ((ballX - radius) <= this.xSelected &&
                this.xSelected <= (ballX + radius) &&
                (ballY - radius) <= this.ySelected &&
                this.ySelected <= (ballY + radius)) {
                ball.toggleValue();
                this.matrixPlayer.draw();
                 if(this.compareMatrix()){
                     alert('WINNER!!');
                 }

            }
        }.bind(this));
    }.bind(this));

}