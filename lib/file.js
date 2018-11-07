Game.prototype.Game.chronometer = function () {
    var counter = this.time;
    this.levelCountDown = (setInterval(function () {
        this.level4(counter);
        this.drawChronometer(counter)
        counter--
        if (counter === 0) {
            this.gameOver();
        }
    }.bind(this), 1000 / 60));
}

