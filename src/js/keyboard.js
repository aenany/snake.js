function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
        case 27:
            
            if(gameState !== null) {
                clearInterval(gameState);
                gameState = null;
            } else {
                gameState = setInterval(game, 1000 / 15);
            }            
            break;
    }
}
