// Game
/**
* @description Represents a Game
* @constructor
*/
var Game = function() {
    // initial position
    this.initialPositions = {'x' : 0, 'y' : 213};
    this.playerNum = 0;
    
    // coordinates to be added to handle the user inputs
    this.offsets = {
        'left' : {'x' : -101, 'y' : 0},
        'right' : {'x' : 101, 'y' : 0}
    };
    
    // set of player types available
    this.playerTypes = [
      'boy',
      'cat-girl',
      'horn-girl',
      'pink-girl',
      'princess-girl'
    ];
    this.playerOffsets = {
      'left': -1,
      'right': 1
    };
    // coordinate limits to check if the player is off bounds
    this.limits = {
        'leftX' : 0,
        'rightX' : 422
    };
  
    // initialize the postions 
    this.x = this.initialPositions.x;
    this.y = this.initialPositions.y;
    
    this.gameStartRenderSetup = {
        font: "22px Arial",
        text: "Select the player and Hit Enter to Start the Game.",
        textX: 10,
        textY: 330
      };
  
    this.gameEndRenderSetup = {
        font: "48px Arial",
        text: "GAME OVER!",
        textX: 120,
        textY: 280
    };
  
    this.sprite = 'images/Selector.png';  
  
  // updated when player is selected
    this.player = null;
};


// Draw the game on the screen, required method for game
Game.prototype.render = function() {

  // render the images of the players in the second row
    function renderPlayers() {
        var rowImages = [
                'images/char-boy.png',   // Boy
                'images/char-cat-girl.png',   // Cat Girl
                'images/char-horn-girl.png',   // Horn Girl
                'images/char-pink-girl.png',   // Pink Girl
                'images/char-princess-girl.png'   // Princess Girl
            ];

          ctx.drawImage(Resources.get(rowImages[0]), 0 * 101, (2 * 83) - 50);
          ctx.drawImage(Resources.get(rowImages[1]), 1 * 101, (2 * 83) - 50);
          ctx.drawImage(Resources.get(rowImages[2]), 2 * 101, (2 * 83) - 50);
          ctx.drawImage(Resources.get(rowImages[3]), 3 * 101, (2 * 83) - 50);
          ctx.drawImage(Resources.get(rowImages[4]), 4 * 101, (2 * 83) - 50);
    }
    // render the selector image to highlight the selected player
    if(gamePhase === 'start'){
        ctx.drawImage(Resources.get(this.sprite), this.x, (3 * 83) - 120);
        ctx.font = this.gameStartRenderSetup.font;
        ctx.fillText(this.gameStartRenderSetup.text,this.gameStartRenderSetup.textX,this.gameStartRenderSetup.textY);
        ctx.fillText(this.gameStartRenderSetup.text,this.gameStartRenderSetup.textX,this.gameStartRenderSetup.textY);
        renderPlayers();
    }else if(gamePhase === 'end'){
        ctx.font = this.gameEndRenderSetup.font;
        ctx.fillStyle = 'red';
        ctx.fillText(this.gameEndRenderSetup.text,this.gameEndRenderSetup.textX,this.gameEndRenderSetup.textY);
        ctx.fillText(this.gameEndRenderSetup.text,this.gameEndRenderSetup.textX,this.gameEndRenderSetup.textY);
        player.scoreObj.render();
        player.levelObj.render();
      
    }
};

// create an object of the player and start the game
Game.prototype.onSelectPlayer = function(_playerType){
    this.player = new Player(_playerType);
    this.startGame();
};

// assign the values of the global variables for the game to begin
Game.prototype.startGame = function(){
    // instatiate the player
    player = this.player;
    // Get the enemies and the game objects for the level 0
    allEnemies = player.levelObj.allEnemies;
    allGameObjects = player.levelObj.allGameObjects;
    // This listens for key presses and sends the keys to your
    // Player.handleInput() method.
    document.addEventListener('keyup', function(e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };
        player.handleInput(allowedKeys[e.keyCode]);
    });
    document.removeEventListener('keyup', gameEvents);
    gamePhase = 'ongoing';
};

// Handle the input from the user to make movements
Game.prototype.handleInput = function(keyCode){
    if(['left','right', 'enter'].indexOf(keyCode) == -1)
        return;
    if(keyCode === 'enter'){
      this.onSelectPlayer(this.playerTypes[this.playerNum]);
      return;
    }
    else if(this.checkLimits(keyCode)){
        this.x += this.offsets[keyCode].x;
        this.playerNum += this.playerOffsets[keyCode];
    }
    this.render();
};


// Check the limits and reset the values if the action is off bounds
Game.prototype.checkLimits = function(keyCode){
    var _tempX = this.x + this.offsets[keyCode].x;
    var _tempY = this.y + this.offsets[keyCode].y;
    if(_tempX < this.limits.leftX || _tempX > this.limits.rightX){
        return false;
    }
    return true;
};