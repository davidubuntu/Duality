function Game(canvasId, level) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.level = level;
    this.reset();
    this.getCoordinates();
    setTimeout(function () {
        this.drawAll();
    }.bind(this), 500)
    this.columnL = 0;
}

// Reset all the properties of Game
Game.prototype.reset = function () {
    this.levels();
    console.log(this.level);
    this.background = new Background(this);
    this.matrixPlayer = new Board(this, 'player');
    this.matrixGame = new Board(this, 'game');
    // if (this.level === 4) {
    //     chronometer();
    // }
}

//Level cases incrememts the difficult
Game.prototype.levels = function () {
    switch (this.level) {
        case 0:
            this.rows = 3;
            this.columns = 3;
            this.radius = 25;
            this.ballSpace = 150;
            this.xBoard = 340;
            this.yBoard = 150;
            break;
        case 1:
            this.rows = 4;
            this.columns = 3;
            this.radius = 25;
            this.ballSpace = 120;
            this.xBoard = 410;
            this.yBoard = 160;
            break;
        case 2:
            this.rows = 5;
            this.columns = 3;
            this.radius = 20;
            this.ballSpace = 100;
            this.xBoard = 460;
            this.yBoard = 180;
            break;
        case 3:
            this.rows = 4;
            this.columns = 3;
            this.radius = 25;
            this.ballSpace = 120;
            this.xBoard = 410;
            this.yBoard = 160;
            break;
    }
}

Game.prototype.drawAll = function () {
    this.background.draw();
    this.matrixPlayer.draw();
    this.matrixGame.draw();

}

Game.prototype.getCoordinates = function () {
    this.xSelected = 0;
    this.ySelected = 0;
    //x,y are the click coordinates relative to the canvas itself
    this.canvas.addEventListener('click', function (ev) {
        this.xSelected = ev.clientX - canvas.offsetLeft;
        this.ySelected = ev.clientY - canvas.offsetTop;

        this.ballSelected();
    }.bind(this), false);

}

Game.prototype.compareMatrix = function () {
    for (var row = 0; row < this.rows; row++) {
        //  Left column to invert the order and compare symetric matrix will reset in each row
        this.columnL = this.matrixPlayer.board[0].length - 1;
        for (var column = 0; column < this.columns; column++) {
            if (this.matrixPlayer.board[row][this.columnL].value !== this.matrixGame.board[row][column].value) {
                return false;
            }
            this.columnL--;
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
                if (this.compareMatrix()) {
                    this.level++;
                    this.reset();
                    this.drawAll();
                    alert(`You are prepared for next Level`);
                }

            }
        }.bind(this));
    }.bind(this));

}