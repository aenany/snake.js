function Game() {

    px += xv;
    py += yv;
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }

    gameRenderer.setBackgroundColor('#000000');

    gameRenderer.fillEntireCanvas("#000000");

    gameRenderer.ctx.fillStyle = "lime";
    
    for (var i = 0; i < trail.length; i++) {
        gameRenderer.ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
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
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }

    gameRenderer.ctx.fillStyle = "red";
    gameRenderer.ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}


