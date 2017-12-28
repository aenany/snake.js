function Game() {

    px += xv;
    py += yv;
    if (px < 0) {
        px = gameRenderer.screenWidth / 20;
    }
    if (px > gameRenderer.screenWidth / 20) {
        px = 0;
    }
    if (py < 0) {
        py = (gameRenderer.screenHeight / 20) - 1;
    }
    if (py > (gameRenderer.screenHeight / 20) - 1) {
        py = 0;
    }    
    
    gameRenderer.setBackgroundColor('#000000');

    gameRenderer.fillEntireCanvas("#000000");    
    
    for (var i = 0; i < trail.length; i++) {
        gameRenderer.drawRectangle('lime', trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2, false);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
            gameScore = 0;
        }
    }

    trail.push({
        x: px,
        y: py
    });

    while (trail.length > tail) {
        trail.shift();
    }

    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * (gameRenderer.screenWidth / 20));
        ay = Math.floor(Math.random() * (gameRenderer.screenHeight / 20));
        gameScore += 100;
    }

    
    gameRenderer.drawText('SCORE: ' + gameScore, 'gold', gameRenderer.canvasWidth - (gameRenderer.canvasWidth), gameRenderer.canvasHeight - (gameRenderer.canvasHeight - gameRenderer.fontHeight));

    gameRenderer.drawRectangle('red', ax * gs, ay * gs, gs - 2, gs - 2, false);
}

Game.prototype.update = function () {

};