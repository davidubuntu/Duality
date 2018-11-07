function Game(canvasId, level) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.level = level;
    this.reset();
    this.getCoordinates();
    this.drawAll();
    // setTimeout(function () {
    //     this.drawAll();
    // }.bind(this), 500)

    this.columnL = 0;
}

// Reset all the properties of Game
Game.prototype.reset = function () {
    this.levels();
    this.background = new Background(this);
    this.matrixPlayer = new Board(this, 'player');
    this.matrixGame = new Board(this, 'game');
    this.chronometer();
    this.speed = 1;
}

Game.prototype.chronometer = function () {
    var counter = this.time;
    this.levelCountDown = (setInterval(function () {
        this.level4(counter); 
        this.drawChronometer(counter/1000)
        counter--
        if (counter === 0) {
            this.gameOver();
        }
    }.bind(this), 1000/60));
}

Game.prototype.drawChronometer = function (counter) {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width)
    this.drawAll();
    this.ctx.font = "30px Lato-Light";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Time: ${(counter*10).toFixed(2)}`, 60, 60);
}

//Level cases incrememts the difficult
Game.prototype.levels = function () {
    switch (this.level) {
        case 0:
            this.rows = 3;
            this.columns = 3;
            this.radius = 30;
            this.ballSpace = 150;
            this.xBoard = 340;
            this.yBoard = 250;
            this.time = 1000;
            break;
        case 1:
            this.rows = 4;
            this.columns = 3;
            this.radius = 25;
            this.ballSpace = 150;
            this.xBoard = 340;
            this.yBoard = 210;
            this.time = 1500;
            break;
        case 2: 
            this.rows = 5;
            this.columns = 3;
            this.radius = 18;
            this.ballSpace = 130;
            this.xBoard = 390;
            this.yBoard = 180;
            this.time = 2000;
            break;
        case 3:
            this.rows = 5;
            this.columns = 4;
            this.radius = 15;
            this.ballSpace = 120;
            this.xBoard = 295;
            this.yBoard = 180;
            this.time = 2500;
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
    setTimeout(function () {
        document.getElementById("top-container").style.display = "none";
        document.getElementById("top-container").classList.add("fadeOut");
    }, 1000);
    setTimeout(function () {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("canvas").classList.add("fadeOut");
    }, 1000);
    setTimeout(function () {
        document.getElementById("game-over").style.display = "block";
        document.getElementById("game-over").classList.add("fadeIn");
    }, 1000);
    setTimeout(function () {
        document.getElementById("game-over-btn").style.display = "block";
        document.getElementById("game-over-btn").classList.add("fadeIn");
    }, 1000);
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
    }
}
Game.prototype.moveBalls = function (arr, arr2) {
    var limit = 40;
    arr.board.forEach(function (row, i) {
        row.forEach(function (ball, j) {
            if ((ball.x < limit && this.speed > 0) || (ball.x > 550 && this.speed < 0)) {
                this.speed *= -1;
                ball.x += this.speed;
                arr2.board[i][j].x += this.speed;
            } else {
                // arr.board[0][0].x = arr.board[1][0].x
                // arr2.board[0][0].x = arr2.board[1][0].x
                ball.x -= this.speed;
                arr2.board[i][j].x += this.speed;
            }
        }.bind(this))
    }.bind(this))

    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.drawAll();
}