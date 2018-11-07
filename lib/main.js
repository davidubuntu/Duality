window.onload = function () {
    var satarButton = document.getElementById("start-game");
    var topContainer = document.getElementById("top-container");
    var presentation = document.getElementById("presentation")
    var canvas = document.getElementById("canvas");
    topContainer.style.display = "none";
    canvas.style.display = "none";
    document.getElementById("game-over").style.display = "none";

   

    satarButton.onclick = function () {
        startGame();
        setTimeout(function () {
            topContainer.classList.add("fadeIn");
            toggle("top-container");
        }, 1000);
        setTimeout(function () {
            canvas.classList.add("fadeIn");       
            toggle("canvas");
        }, 1000);
    
        setTimeout(function () {
            presentation.classList.add("fadeOut");       
            toggle("presentation");
        }, 1000);
    };

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