// BALL CONSTRUCTOR
function Ball(game, row, column,value) {
    this.game = game;
    this.index = 0;
    this.value = value;
    this.ctx = this.game.ctx; 
   
    this.x = 250 + column * 150;
    this.y = 150 + row * 150;
    this.radius = 40;
}
Ball.prototype.draw = function(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    if(this.value ===1){
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }else{
        this.ctx.fillStyle = 'rgb(198 , 200, 201)';//gray
        this.ctx.fill();
    }
    this.ctx.stroke();
}
