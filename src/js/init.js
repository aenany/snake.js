var gameState = null;
var gameRenderer = null;
var gameFPS = 1000 / 15;
var gameScore = 0;

var px = 10;
var py = 10;
var gs = 20;
var tc = 20;
var ax = 15;
var ay = 15;
var xv = 0;
var yv = 0;
var trail = [];
var tail = 5;

window.onload = function () {
    var gameCanvas = document.getElementById("snakeCanvas");
    var ctx = gameCanvas.getContext("2d");
    gameRenderer = new Renderer();
    gameState = setInterval(Game, gameFPS);
};

window.onresize = function () {
    gameRenderer.setCanvasSize(window.innerWidth - 20, window.innerHeight - 20);
    gameRenderer.fillEntireCanvas('#000000');
};

