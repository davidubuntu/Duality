
window.onload = function () {
    song.play();
    var startBtn = document.getElementById("start-game");
    var topContainer = document.getElementById("top-container");
    var presentation = document.getElementById("presentation")
    var canvas = document.getElementById("canvas");
    var gameOverBtn = document.getElementById("game-over-btn");
    var gameOverContainer = document.getElementById("game-over");
    var obstacle = document.getElementById("obstacle");
    var endGame = document.getElementById("endGame");
    var finsihTitle = document.getElementById("finish-title");

    obstacle.style.display = "none";
    topContainer.style.display = "none";
    canvas.style.display = "none";
    gameOverBtn.style.display = "none";
    gameOverContainer.style.display = "none";
    endGame.style.display = "none";
    finsihTitle.style.display = "none";
    isClicked = false;
    const element = document.querySelector("#start-game ");
   element.classList.add("clickable");
   element.classList.remove("notClickable");

    startBtn.onclick = function () {
      element.classList.add("notClickable");
      element.classList.remove("clickable");
        if(!isClicked) {
            startBtn.removeAttribute("id");
            presentation.classList.add("fadeOut");
            setTimeout(function () {
                toggle("canvas");
                canvas.classList.add("fadeIn");
            }, 1500)
            setTimeout(function () {
                startGame();
            }, 1500)
            setTimeout(function () {
                toggle("presentation");
            }, 1500)
            setTimeout(function () {
                toggle("top-container");
                topContainer.classList.add("fadeIn");
            }, 2700)
            isClicked = true;
        }
    };

    gameOverBtn.onclick = function () {
        if(flagEndGame === true){
            window.location.reload();
            gameOverBtn.style.display = "none";
            gameOverContainer.style.display = "none";

        }
       gameOverContainer.classList.add("fadeOut");
       finsihTitle.style.display = "none";
       endGame.style.display = "none";
       document.getElementById("endGame").style.display = "none";
       setTimeout(function () {
           canvas.classList.remove("fadeOut");
           toggle("canvas");
           canvas.classList.add("fadeIn");
       }, 1000)
       setTimeout(function () {
           startGame();
       }, 1000)
       setTimeout(function () {
           toggle("game-over");
       }, 1000)
       setTimeout(function () {
           topContainer.classList.remove("fadeOut");
           toggle("top-container");
           topContainer.classList.add("fadeIn");
       }, 2500)
    }

    function toggle(id) {
        var x = document.getElementById(id);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    setCanvasDimensions();
    window.onresize = setCanvasDimensions;
}

function startGame() {
    var game = new Game("canvas", 0);
}

function setCanvasDimensions() {
    var canvasDOMElement = document.querySelector('canvas');
    const height =  window.innerWidth <= 1500 ? window.innerHeight : 770
    canvasDOMElement.setAttribute("height",height);
    canvasDOMElement.setAttribute("width", 1440);
}
