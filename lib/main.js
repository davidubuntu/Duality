window.onload = function () {
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

    startBtn.onclick = function () {
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
    };

    gameOverBtn.onclick = function () {
       gameOverContainer.classList.add("fadeOut");
       finsihTitle.style.display = "none";
       document.getElementById("endGame").style.display = "none";
       setTimeout(function () {
           canvas.classList.remove("fadeOut");
           toggle("canvas");
           canvas.classList.add("fadeIn");
       }, 500)
       setTimeout(function () {
           startGame();
       }, 500)
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
    canvasDOMElement.setAttribute("height", window.innerHeight);
    canvasDOMElement.setAttribute("width", window.innerWidth);
}