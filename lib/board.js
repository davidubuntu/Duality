function Board(game, type) {
    this.game = game;
    this.type = type;
    this.board = [];
    this.generate(this.type);

}
// Generates  a board depending if is a player type or game  type
Board.prototype.generate = function (type) {
    (type === 'player') ? this.generatePlayerBoard(): this.generateGameBoard();
}

Board.prototype.generatePlayerBoard = function () {
    for (var row = 0; row < this.game.rows; row++) {
        this.board[row] = [];
        for (var column = 0; column < this.game.columns; column++) {
            this.board[row][column] = (new Ball(this.game, row, column, 0)); //value 1 ó 0 para las del game segun empiece    
        }
    }
}

Board.prototype.generateGameBoard = function () {
    for (var row = 0; row < this.game.rows; row++) {
        this.board[row] = [];//each row is a new array (bidimensional array)
        for (var column = 0; column < this.game.columns; column++) {
            this.board[row][column] = (new Ball(this.game, row, column+3, Math.floor(Math.random()*2)));

        }
    }
}

// Loop the balls in the board array and call the draw method for each one
Board.prototype.draw = function () {
    for (var row = 0; row < this.game.rows; row++) {
        for (var column = 0; column < this.game.columns; column++) {
            // console.log(this.board[row][column])
            // Access to each ball object and paint it
            this.board[row][column].draw(); //value 1 ó 0 para las del game segun empiece    
        }
    }
}