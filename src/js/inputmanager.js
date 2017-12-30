var gamepadAPI = new Gamepad();
// var capturedGamepadConnectionEvent = null


// window.addEventListener("gamepadconnected", function(e) {
//     console.log(e);
//     capturedGamepadConnectionEvent = e;
// });



gamepadAPI.on('connect', e => {
    // console.log(e);
    // console.log(`controller ${e.index} connected!`);

    var gamePadInfo = navigator.getGamepads();

    for (var gamepad in gamePadInfo) {
        var currentGamePad = gamePadInfo[gamepad];

        if (currentGamePad && currentGamePad.id === 'HuiJia  USB GamePad (Vendor: 0e8f Product: 3013)') {
            console.log('SNES Controller (HuiJia / Mayflash) detected');

            // gamepadAPI.setCustomMapping('gamepad', {
            //     'button_1': 0,
            //     'button_2': 1,
            //     'button_3': 2,
            //     'button_4': 3,
            //     'shoulder_top_left': 4,
            //     'shoulder_top_right': 5,
            //     'shoulder_bottom_left': 6,
            //     'shoulder_bottom_right': 7,
            //     'select': 8,
            //     'start': 9,
            //     'stick_button_left': 10,
            //     'stick_button_right': 11,        
            //     'd_pad_up': [0,-1],
            //     'd_pad_down': [0,1],
            //     'd_pad_left': [-1, 0],
            //     'd_pad_right': [1,0],
            //     'vendor': 16
            // });

            gamepadAPI.on('hold', 'stick_axis_left', (e) => {
                // console.log(e.value);
                if (e.value[0] === -1 && e.value[1] === 0) { //D-pad left
                    xv = -1;
                    yv = 0;
                }

                if (e.value[0] === 1 && e.value[1] === 0) { //D-pad right
                    xv = 1;
                    yv = 0;

                }

                if (e.value[0] === 0 && e.value[1] === -1) { //D-pad up
                    xv = 0;
                    yv = -1;

                }

                if (e.value[0] === 0 && e.value[1] === 1) { //D-pad down
                    xv = 0;
                    yv = 1;

                }
            });

        }
    }
});

gamepadAPI.on('disconnect', e => {
    console.log(`controller ${e.index} disconnected!`);
});

gamepadAPI.on('hold', 'd_pad_up', (e) => {
    xv = 0;
    yv = -1;

});

gamepadAPI.on('hold', 'd_pad_down', (e) => {
    xv = 0;
    yv = 1;

});

gamepadAPI.on('hold', 'd_pad_left', (e) => {
    xv = -1;
    yv = 0;

});

gamepadAPI.on('hold', 'd_pad_right', (e) => {
    xv = 1;
    yv = 0;

});

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
});

gamepadAPI.on('press', 'select', (e) => {
    ax = Math.floor(Math.random() * (gameRenderer.screenWidth / 20));
    ay = Math.floor(Math.random() * (gameRenderer.screenHeight / 20));

});