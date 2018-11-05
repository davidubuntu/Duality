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
    for (var row = 0; row < 4; row++) {
        this.board[row] = [];
        for (var column = 0; column < 3; column++) {
            this.board[row][column] = (new Ball(this.game, row, column, 0)); //value 1 ó 0 para las del game segun empiece    
        }
    }
}

Board.prototype.generateGameBoard = function () {
    for (var row = 0; row < 4; row++) {
        this.board[row] = [];//each row is a new array (bidimensional array)
        for (var column = 0; column < 3; column++) {
            if (row == 1 && column === 1) {
                this.board[row][column] = (new Ball(this.game, row, column+3, 1));
            } else if(row == 3 && column == 2){
                this.board[row][column] = (new Ball(this.game, row, column+3, 1)); //value 1 ó 0 para las del game segun empiece    
            } else if (row == 0 && column == 1){
                this.board[row][column] = (new Ball(this.game, row, column+3, 1));
            
            }else{
                this.board[row][column] = (new Ball(this.game, row, column+3, 0));
            }
        }
    }
}


Board.prototype.draw = function () {
    for (var row = 0; row < 4; row++) {
        for (var column = 0; column < 3; column++) {
            // console.log(this.board[row][column])
            this.board[row][column].draw(); //value 1 ó 0 para las del game segun empiece    
        }
    }
}