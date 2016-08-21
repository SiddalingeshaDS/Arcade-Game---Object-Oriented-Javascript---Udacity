
// instantiate the game
var game = new Game();

// This listens for key presses and sends the keys to your
// Game.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        39: 'right',
        13: 'enter'
    };
    game.handleInput(allowedKeys[e.keyCode]);
});

