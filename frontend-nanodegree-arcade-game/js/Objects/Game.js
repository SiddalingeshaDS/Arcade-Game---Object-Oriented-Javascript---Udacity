// Game
/**
* @description Represents a Game
* @constructor
*/
var Game = function() {
  
    // get the constant values for the game
    this.CONSTANTS = CONSTANT_FUNCTION('GAME');
  
    // initial position
    this.initialPositions = {'x': this.CONSTANTS.INITIAL_POSITIONS.X};
    this.playerNum = this.CONSTANTS.INITIAL_PLAYER_NUM;
    
    // coordinates to be added to handle the user inputs
    this.offsets = {
        'left': {'x': this.CONSTANTS.OFFSETS.LEFT.X },
        'right': {'x': this.CONSTANTS.OFFSETS.RIGHT.X }
    };
    
    // coordinate limits to check if the player is off bounds
    this.limits = {
        'leftX': this.CONSTANTS.LIMITS.LEFT_X,
        'rightX': this.CONSTANTS.LIMITS.RIGHT_X
    };
  
    this.playerOffsets = {
      'left':  this.CONSTANTS.PLAYER_OFFSETS.LEFT,
      'right': this.CONSTANTS.PLAYER_OFFSETS.RIGHT
    };
    // set of player types available
    this.playerTypes =this.CONSTANTS.PLAYER_TYPES;
  
    // initialize the postions 
    this.x = this.initialPositions.x;
    
    this.gameStartRenderSetup = {
        font: this.CONSTANTS.GAME_START_RENDER_SETUP.FONT,
        text: this.CONSTANTS.GAME_START_RENDER_SETUP.TEXT,
        textX: this.CONSTANTS.GAME_START_RENDER_SETUP.TEXT_X,
        textY: this.CONSTANTS.GAME_START_RENDER_SETUP.TEXT_Y
      };
  
    this.gameEndRenderSetup = {
        font: this.CONSTANTS.GAME_END_RENDER_SETUP.FONT,
        text: this.CONSTANTS.GAME_END_RENDER_SETUP.TEXT,
        fillStyle: this.CONSTANTS.GAME_END_RENDER_SETUP.FILL_STYLE,
        textX: this.CONSTANTS.GAME_END_RENDER_SETUP.TEXT_X,
        textY: this.CONSTANTS.GAME_END_RENDER_SETUP.TEXT_Y
    };
  
    this.sprite = this.CONSTANTS.SPRITE_IMG;  
  
  // updated when player is selected
    this.player = this.CONSTANTS.INITIAL_PLAYER;
};


// Draw the game on the screen, required method for game
Game.prototype.render = function() {
  var self = this;
  // render the images of the players in the second row
    function renderPlayers() {
        
        var rowImages = self.CONSTANTS.BACKGROUND_ROW_IMAGES;
        for(var i=0; i < rowImages.length; i++){
          ctx.drawImage(Resources.get(rowImages[i]), self.CONSTANTS.BACKGROUND_IMG_COORDINATES[i].X, self.CONSTANTS.BACKGROUND_IMG_COORDINATES[i].Y);
        }
    }
    // render the selector image to highlight the selected player
    if(gamePhase === 'start'){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.CONSTANTS.SPRITE_IMG_Y);
        ctx.font = this.gameStartRenderSetup.font;
        ctx.fillText(this.gameStartRenderSetup.text,this.gameStartRenderSetup.textX,this.gameStartRenderSetup.textY);
        ctx.fillText(this.gameStartRenderSetup.text,this.gameStartRenderSetup.textX,this.gameStartRenderSetup.textY);
        renderPlayers();
    }else if(gamePhase === 'end'){
        ctx.font = this.gameEndRenderSetup.font;
        ctx.fillStyle = this.gameEndRenderSetup.fillStyle;
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
    if(_tempX < this.limits.leftX || _tempX > this.limits.rightX){
        return false;
    }
    return true;
};