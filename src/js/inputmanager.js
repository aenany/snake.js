function KeyboardManager(evt) {
    switch (evt.keyCode) {
        case 37: // LEFT
            xv = -1;
            yv = 0;
            break;
        case 38: // UP
            xv = 0;
            yv = -1;
            break;
        case 39: // RIGHT
            xv = 1;
            yv = 0;
            break;
        case 40: // DOWN
            xv = 0;
            yv = 1;
            break;
        case 27: // ESCAPE

            if (gameState !== null) {
                clearInterval(gameState);
                gameRenderer.pauseTextId = gameRenderer.drawText('Game Paused', 'gold', gameRenderer.screenWidth / 2, gameRenderer.screenHeight / 2, true);
                gameRenderer.snakeImageId = gameRenderer.drawImage('./img/snake_menu.gif', 0, 0, 349, 523, true);
                gameState = null;
            } else {
                gameState = setInterval(Game, gameFPS);
                gameRenderer.clearElement(gameRenderer.pauseTextId);
                gameRenderer.clearElement(gameRenderer.snakeImageId);
            }

            break;
    }
}

var gamepadAPI = new Gamepad();



gamepadAPI.on('connect', e => {
    // console.log(e);
    console.log(`controller ${e.index} connected!`);
});

gamepadAPI.on('disconnect', e => {
    console.log(`controller ${e.index} disconnected!`);
});

gamepadAPI.on('press', 'd_pad_up', (e) => {
    xv = 0;
    yv = -1;

    console.log(`player ${e.player} pressed ${e.button}!`);
    
});

gamepadAPI.on('press', 'd_pad_down', (e) => {
    xv = 0;
    yv = 1;

    console.log(`player ${e.player} pressed ${e.button}!`);
});

gamepadAPI.on('press', 'd_pad_left', (e) => {
    xv = -1;
    yv = 0;    

    console.log(`player ${e.player} pressed ${e.button}!`);
});

gamepadAPI.on('press', 'd_pad_right', (e) => {
    xv = 1;
    yv = 0;

    console.log(`player ${e.player} pressed ${e.button}!`);
});

// gamepadAPI.on('press', 'button_1', (e) => {
//     console.log(e);
//     console.log(`player ${e.player} pressed ${e.button}!`);
// });

// gamepadAPI.on('press', 'button_2', (e) => {
//     console.log(`player ${e.player} pressed ${e.button}!`);
// });


// gamepadAPI.on('press', 'button_3', (e) => {
//     console.log(`player ${e.player} pressed ${e.button}!`);
// });


// gamepadAPI.on('press', 'button_4', (e) => {
//     console.log(`player ${e.player} pressed ${e.button}!`);
// });


// gamepadAPI.on('press', 'shoulder_top_left', (e) => {
//     console.log(`player ${e.player} pressed ${e.button}!`);
// });

// gamepadAPI.on('press', 'shoulder_top_right', (e) => {
//     console.log(`player ${e.player} pressed ${e.button}!`);
// });

// gamepadAPI.on('press', 'shoulder_bottom_left', (e) => {
//     console.log(`player ${e.player} pressed ${e.button}!`);
// });

// gamepadAPI.on('press', 'shoulder_bottom_right', (e) => {
//     console.log(`player ${e.player} pressed ${e.button}!`);
// });

gamepadAPI.on('press', 'start', (e) => {
    if (gameState !== null) {
        clearInterval(gameState);
        gameRenderer.pauseTextId = gameRenderer.drawText('Game Paused', 'gold', gameRenderer.screenWidth / 2, gameRenderer.screenHeight / 2, true);
        gameRenderer.snakeImageId = gameRenderer.drawImage('./img/snake_menu.gif', 0, 0, 349, 523, true);
        gameState = null;
    } else {
        gameState = setInterval(Game, gameFPS);
        gameRenderer.clearElement(gameRenderer.pauseTextId);
        gameRenderer.clearElement(gameRenderer.snakeImageId);
    }

    console.log(`player ${e.player} pressed ${e.button}!`);
});

gamepadAPI.on('press', 'select', (e) => {
    console.log(`player ${e.player} pressed ${e.button}!`);
});

gamepadAPI.on('press', 'stick_button_left', (e) => {
    console.log(`player ${e.player} pressed ${e.button}!`);
});

gamepadAPI.on('press', 'stick_button_right', (e) => {
    console.log(`player ${e.player} pressed ${e.button}!`);
});


gamepadAPI.on('press', 'stick_axis_right', (e) => {
    console.log(e.value);

    console.log(`player ${e.player} pressed ${e.button}!`);
});


gamepadAPI.on('press', 'vendor', (e) => {
    console.log(`player ${e.player} pressed ${e.button}!`);
});


var gamePadInfo = navigator.getGamepads();

for(gamepad in gamePadInfo) {
    var currentGamePad = gamePadInfo[gamepad];

    if(currentGamePad && currentGamePad.id === 'HuiJia  USB GamePad (Vendor: 0e8f Product: 3013)'){
        console.log('SNES Controller (HuiJia / Mayflash) detected');

        gamepadAPI.on('press', 'stick_axis_left', (e) => {
            console.log(e.value);
            if(e.value[0] ===-1 && e.value[1] === 0){ //D-pad left
                xv = -1;
                yv = 0;    
            } 

            if(e.value[0] === 1 && e.value[1] === 0){ //D-pad right
                xv = 1;
                yv = 0;
    
            } 

            if(e.value[0] === 0 && e.value[1] === -1){ //D-pad up
                xv = 0;
                yv = -1;
    
            } 

            if(e.value[0] === 0 && e.value[1] === 1){ //D-pad down
                xv = 0;
                yv = 1;
    
            } 

        
            console.log(`player ${e.player} pressed ${e.button}!`);
        });        
        // gamepadAPI.setCustomMapping('keyboard', {
        //     'button_1': 32,
        //     'start': 27,
        //     'd_pad_up': [38, 87],
        //     'd_pad_down': [40, 83],
        //     'd_pad_left': [37, 65],
        //     'd_pad_right': [39, 68]
        // });
        
    }
}
