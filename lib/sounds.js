function MySound (src){
    
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.pause = function () {
        this.sound.pause();
    }
}
var song = new MySound("./sound/inception_song.mp3") 
