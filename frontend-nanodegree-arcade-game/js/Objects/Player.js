/**
* @description Represents a Player
* @constructor
*/
var Player = function(_playerType){
    // initial position for the player
    if(!CONSTANTS)
      return;
    this.initialPositions = {'x': CONSTANTS.PLAYER.INITIAL_POSITIONS.X, 'y': CONSTANTS.PLAYER.INITIAL_POSITIONS.Y};
    
    // coordinates to be added to handle the user inputs
    this.offsets = {
        'left': {'x': CONSTANTS.PLAYER.OFFSETS.LEFT.X, 'y': CONSTANTS.PLAYER.OFFSETS.LEFT.Y},
        'up': {'x': CONSTANTS.PLAYER.OFFSETS.UP.X, 'y': CONSTANTS.PLAYER.OFFSETS.UP.Y},
        'right': {'x': CONSTANTS.PLAYER.OFFSETS.RIGHT.X, 'y': CONSTANTS.PLAYER.OFFSETS.RIGHT.Y},
        'down': {'x': CONSTANTS.PLAYER.OFFSETS.DOWN.X, 'y': CONSTANTS.PLAYER.OFFSETS.DOWN.Y}
    };
    
    // coordinate limits to check if the player is off bounds
    this.limits = {
        'leftX': CONSTANTS.PLAYER.LIMITS.LEFT_X,
        'rightX': CONSTANTS.PLAYER.LIMITS.RIGHT_X,
        'topY': CONSTANTS.PLAYER.LIMITS.TOP_Y,
        'bottomY': CONSTANTS.PLAYER.LIMITS.BOTTOM_Y
    }
    
    // collision range for the player
    this.collisionRange = {
        'x': CONSTANTS.PLAYER.COLLISION_RANGE.X,
        'y': CONSTANTS.PLAYER.COLLISION_RANGE.Y
    };
    
    // initialize the postions before the game begins
    this.x = this.initialPositions.x;
    this.y = this.initialPositions.y;
  
    this.playerType = _playerType || CONSTANTS.PLAYER.DEFAULT_PLAYER_TYPE;
    var _spriteDict = CONSTANTS.PLAYER.SPRITE_DICT;  
    this.sprite = _spriteDict[this.playerType];
    this.prevMove = CONSTANTS.PLAYER.DEFAULT_PREV_MOVE;
  
    // add the score object to the player
    this.scoreObj = new PlayerScore();
  
    // add the level object to the player
    this.levelObj = new PlayerLevel();
    this.levelObj.initWithLevel(CONSTANTS.PLAYER.DEFAULT_LEVEL);
  
    // add the life object to the player
    this.lifeObj = new PlayerLife(CONSTANTS.PLAYER.DEFAULT_LIVES);
};

// Move player to next level
Player.prototype.moveToNextLevel = function(){
  this.levelObj.initWithLevel(this.levelObj.level + 1);
  allEnemies = this.levelObj.allEnemies;
  allGameObjects = this.levelObj.allGameObjects;
};

// Update the player's position, required method for game
Player.prototype.update = function(){
    // get a handler for this to be used in the forEach function
    self = this;
    // check if the enemy is the collision range of the player
    allEnemies.forEach(function(enemy) {
        if((((enemy.x + self.collisionRange.x >= self.x) && (enemy.x  - self.x < self.collisionRange.x)) ) && ((self.y >= enemy.y) && (self.y - enemy.y < self.collisionRange.y))){
            self.scoreObj.updateScore(self.scoreObj.scoreValDict.collision);
            self.lifeObj.updateLife(-1);
            self.reset();
        }
    });
  
    // check if any game object is in collision range
    allGameObjects.forEach(function(gameObj){
        if((((gameObj.x + self.collisionRange.x >= self.x) && (gameObj.x  - self.x < self.collisionRange.x)) ) && ((self.y >= gameObj.y) && (self.y - gameObj.y < self.collisionRange.y))){
            self.scoreObj.updateScore(self.scoreObj.scoreValDict[gameObj.objType]);
            if(gameObj.objType == 'rock'){
                self.undoPrevMove();
            }else{
                gameObj.remove();
            }
        }
    });
};

// Undo Previous Move
Player.prototype.undoPrevMove = function(){
  _revMoveObj = {
    'left': 'right',
    'right': 'left',
    'up': 'down',
    'down': 'up'
  };
  this.handleInput(_revMoveObj[this.prevMove]);
}

// Draw the player on the screen, required method for game
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.levelObj.render();
    this.scoreObj.render();
    this.lifeObj.render();
};

// Handle the input from the user to make player movements
Player.prototype.handleInput = function(keyCode){
    if(['left','right','up','down'].indexOf(keyCode) == -1)
        return;
    if(this.checkLimits(keyCode)){
        this.x += this.offsets[keyCode].x;
        this.y += this.offsets[keyCode].y;
        console.log(keyCode,this.offsets[keyCode].x,this.offsets[keyCode].y);
    }else{
        this.prevMove = '';
        this.reset();
    }
    this.prevMove = keyCode;
    this.render();
};

// Check the limits and reset the values if the player is off bounds
Player.prototype.checkLimits = function(keyCode){
    var _tempX = this.x + this.offsets[keyCode].x;
    var _tempY = this.y + this.offsets[keyCode].y;
    if(_tempX < this.limits.leftX || _tempX > this.limits.rightX || _tempY < this.limits.topY || _tempY > this.limits.bottomY){
       if(_tempY <= this.limits.topY){
          this.scoreObj.updateScore(this.scoreObj.scoreValDict.finish);
          this.moveToNextLevel();
        }else{
          this.scoreObj.updateScore(this.scoreObj.scoreValDict.offBound);
        }
        return false;
    }
    return true;
};

// Reset the values to the initial positions
Player.prototype.reset = function(){
    this.x = this.initialPositions.x;
    this.y = this.initialPositions.y;
    this.render();
}

