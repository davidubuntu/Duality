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
    this.background = new Background(this);
    this.matrixPlayer = new Board(this, 'player');
    this.matrixGame = new Board(this, 'game');
    this.chronometer();
    this.speed = 50;
}

Game.prototype.chronometer = function () {
    var counter = this.time / 1000;
    this.levelCountDown = (setInterval(function () {
/*         console.log(counter); //Chronometer counter
 */        this.level4(counter);
        this.drawChronometer(counter)
        counter--
        if (counter === 0) {
            this.gameOver();
        }
    }.bind(this), 1000));
}

Game.prototype.drawChronometer = function (counter) {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width)

    this.drawAll();
    this.ctx.font = "30px Lato-Light";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Time: ${counter}`, 60, 60);
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
            this.time = 15000;
            break;
        case 1:
            this.rows = 4;
            this.columns = 3;
            this.radius = 25;
            this.ballSpace = 120;
            this.xBoard = 410;
            this.yBoard = 160;
            this.time = 20000;
            break;
        case 2:
            this.rows = 5;
            this.columns = 3;
            this.radius = 20;
            this.ballSpace = 100;
            this.xBoard = 460;
            this.yBoard = 180;
            this.time = 20000;
            break;
        case 3:
            this.rows = 5;
            this.columns = 4;
            this.radius = 15;
            this.ballSpace = 120;
            this.xBoard = 275;
            this.yBoard = 180;
            this.time = 35000;
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
    this.matrixPlayer.board.forEach(function (row, rowIndex) {
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
                    this.nextLevel();
                }
            }
        }.bind(this));
    }.bind(this));

}

Game.prototype.gameOver = function () {
    clearInterval(this.levelCountDown)
    window.location.reload()
    console.log("HAS LLLEGADO A CERO")
}
Game.prototype.nextLevel = function () {
    clearInterval(this.levelCountDown)
    this.level++;
    this.reset();
    this.drawAll();
    console.log(`You are prepared for next Level`);
}

Game.prototype.level4 = function (counter) {
    if (this.level === 3 && (counter % 2 === 0)) {
        this.moveBalls(this.matrixPlayer, this.matrixGame);
        //this.moveBalls(this.matrixGame, "R");
    }
}
Game.prototype.moveBalls = function (arr, arr2) {
    var limit = 30;

    console.log(arr.board)

    arr.board.forEach(function (row, i) {
        row.forEach(function (ball, j) {
            if ((ball.x < limit && this.speed > 0) || (ball.x > 500 && this.speed < 0)) {
                arr2.board[0][3].x = arr2.board[1][3].x
                this.speed *= -1;
                arr2.board[i][j].x +=this.speed;
                ball.x += this.speed;
            } else {
                arr.board[0][0].x = arr.board[3][0].x
                arr2.board[0][0].x = arr2.board[1][0].x
                ball.x -= this.speed;
                arr2.board[i][j].x +=this.speed;
              }
        }.bind(this))
    }.bind(this))

    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.drawAll();
}