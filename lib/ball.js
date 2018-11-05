// BALL CONSTRUCTOR
function Ball(game, row, column,value) {
    this.game = game;
    this.index = 0;
    this.value = value;
    this.ctx = this.game.ctx; 
    this.x = 275 + column * 150;
    this.y = 150 + row * 150;
    this.radius = 15;
}

Ball.prototype.toggleValue = function(){
    (this.value ===0)?this.value =1:this.value =0;
}

Ball.prototype.draw = function(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    if(this.value ===1){
        this.ctx.fillStyle = 'rgb(0 , 0, 1';
        this.ctx.fill();
        this.ctx.lineWidth = 0;
    }else{
        this.ctx.fillStyle = 'rgb(198 , 200, 201)';//gray
        this.ctx.fill();
        this.ctx.lineWidth = 0;
    }
    // this.ctx.stroke();
}

