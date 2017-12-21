var gameState = null;

var px = py = 10;
var gs = tc = 20;
var ax = ay = 15;
var xv = yv = 0;
var trail = [];
var tail = 5;

window.onload = function () {
    canv = document.getElementById("snakeCanvas");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    gameState = setInterval(game, 1000 / 15);
};

