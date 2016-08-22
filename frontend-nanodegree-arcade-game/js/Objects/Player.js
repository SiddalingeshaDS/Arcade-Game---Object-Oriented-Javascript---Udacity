/**
* @description Represents a Player
* @constructor
*/
var Player = function(_playerType){

    // get the constant values for the player
    this.CONSTANTS = CONSTANT_FUNCTION('PLAYER');
  
    // initial position for the player
    this.initialPositions = {'x': this.CONSTANTS.INITIAL_POSITIONS.X, 'y': this.CONSTANTS.INITIAL_POSITIONS.Y};
    
    // coordinates to be added to handle the user inputs
    this.offsets = {
        'left': {'x': this.CONSTANTS.OFFSETS.LEFT.X, 'y': this.CONSTANTS.OFFSETS.LEFT.Y},
        'up': {'x': this.CONSTANTS.OFFSETS.UP.X, 'y': this.CONSTANTS.OFFSETS.UP.Y},
        'right': {'x': this.CONSTANTS.OFFSETS.RIGHT.X, 'y': this.CONSTANTS.OFFSETS.RIGHT.Y},
        'down': {'x': this.CONSTANTS.OFFSETS.DOWN.X, 'y': this.CONSTANTS.OFFSETS.DOWN.Y}
    };
    
    // coordinate limits to check if the player is off bounds
    this.limits = {
        'leftX': this.CONSTANTS.LIMITS.LEFT_X,
        'rightX': this.CONSTANTS.LIMITS.RIGHT_X,
        'topY': this.CONSTANTS.LIMITS.TOP_Y,
        'bottomY': this.CONSTANTS.LIMITS.BOTTOM_Y
    }
    
    // collision range for the player
    this.collisionRange = {
        'x': this.CONSTANTS.COLLISION_RANGE.X,
        'y': this.CONSTANTS.COLLISION_RANGE.Y
    };
    
    // initialize the postions before the game begins
    this.x = this.initialPositions.x;
    this.y = this.initialPositions.y;
  
    this.playerType = _playerType || this.CONSTANTS.DEFAULT_PLAYER_TYPE;
    var _spriteDict = this.CONSTANTS.SPRITE_DICT;  
    this.sprite = _spriteDict[this.playerType];
    this.prevMove = this.CONSTANTS.DEFAULT_PREV_MOVE;
  
    // add the score object to the player
    this.scoreObj = new PlayerScore();
  
    // add the level object to the player
    this.levelObj = new PlayerLevel();
    this.levelObj.initWithLevel(this.CONSTANTS.DEFAULT_LEVEL);
  
    // add the life object to the player
    this.lifeObj = new PlayerLife(this.CONSTANTS.DEFAULT_LIVES);
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

