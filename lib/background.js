function Background(game) {
    this.game = game;
    this.img = new Image();
    this.img.src = './img/background.jpg';
    this.x = 0;
    this.y = 0;
} 

Background.prototype.draw = function(){
// void ctx.drawImage(image, dx, dy, dWidth, dHeight);
 this.game.ctx.drawImage(this.img,this.x,this.y,this.game.canvas.width,this.game.canvas.height);
}
