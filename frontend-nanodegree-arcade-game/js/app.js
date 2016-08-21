// Enemies our player must avoid
/**
* @description Represents an Enemy
* @constructor
*/
var Enemy = function() {
    // width of the canvas used to restart the enemy flow
    this.widthOfCanvas = 505;
    // used to set the speed of the enemy
    var minSpeed = 100;
    var speedVariation = 300;
    this.randomSpeedRatio =  minSpeed + Math.floor(speedVariation * Math.random(Date.now));
    
    // Initial variables to hold the size and step of the enemy positions
    var _xOffset = -101;
    var _yOffset = 60;
    var _rowHeight = 83; // rowHeight of the blocks where the enemies can be placed
    
    // Random initialization of the y value to start anywhere on the three block paths
    this.x = _xOffset;
    this.y = _yOffset + ( _rowHeight * (Math.floor(3 * Math.random(Date.now()))));

    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Update the values of x until width of canvas, and then restart
    if((this.x + (this.randomSpeedRatio * dt)) < this.widthOfCanvas){
        this.x += (this.randomSpeedRatio * dt);
    }else{
        this.x = -101;
    }
    this.render();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//---------------------------------------------------

/**
* @description Represents a GameObject that will be drawn on the path => Gems, Rock, etc
* @constructor
*/

var GameObject = function(_objType){
      // coordinates to be added to handle the user inputs
    this.hideOffsets = {
        'topX' : -101,
        'topY' : -83,
    };
    // Default to Blue Gem
    this.objType = _objType || 'blueGem';
    _spriteDict = {
      'blueGem' : 'images/Gem Blue.png',
      'greenGem' : 'images/Gem Green.png',
      'orangeGem' : 'images/Gem Orange.png',
      'rock': 'images/Rock.png'
    };
    this.sprite = _spriteDict[this.objType];
      // Initial variables to hold the size and step of the game object positions
    var _xOffset = 0;
    var _yOffset = 60;
    var _rowHeight = 83; // rowHeight of the blocks where the game objects can be placed
    var _rowWidth = 101; // rowHeight of the blocks where the game objects can be placed

    // Random initialization of the x and y value to be placed anywhere on the three block paths
    this.rowNum = (Math.floor(5 * Math.random(Date.now())));
    this.colNum = (Math.floor(3 * Math.random(Date.now())));
    this.x = _xOffset + ( _rowWidth * this.rowNum);
    this.y = _yOffset + ( _rowHeight * this.colNum);
}

// Draw the game object on the screen, required method for game
GameObject.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Remove the game obj from the screen, required method for game
GameObject.prototype.remove = function() {
  this.x = this.hideOffsets.topX;
  this.y = this.hideOffsets.topY;
};

//---------------------------------------------------

/**
* @description Represents a PlayerScore
* @constructor
*/

var PlayerScore = function(_scoreValDict){
    // add score values
    this.score = 0;
    this.scoreRenderSetup = {
      font: "30px Arial",
      text: "Score: ",
      canvasWidth: 250,
      canvasHeight: 101,
      textX: 10,
      textY: 50
    };
    _scoreValDict = _scoreValDict || {};
    this.scoreValDict = {
      finish : _scoreValDict.finish || 5,
      star: _scoreValDict.star || 5,
      blueGem: _scoreValDict.blueGem || 10,
      greenGem: _scoreValDict.greenGem || 15,
      orangeGem: _scoreValDict.orangeGem || 25,
      collision: _scoreValDict.collision || -5,
      offBound: _scoreValDict.offBound || -1,
      rock: _scoreValDict.rock || 0
    };
};

// Update the score of the player
PlayerScore.prototype.updateScore = function(value){
    this.score = this.score + value;
};

// Update the player score on the screen, required method for game
PlayerScore.prototype.render = function(){
    scoreCtx.clearRect(0, 0, this.scoreRenderSetup.canvasWidth, this.scoreRenderSetup.canvasHeight);
    scoreCtx.font = this.scoreRenderSetup.font;
    scoreCtx.fillText(this.scoreRenderSetup.text + this.score,this.scoreRenderSetup.textX,this.scoreRenderSetup.textY);
    scoreCtx.fillText(this.scoreRenderSetup.text + this.score,this.scoreRenderSetup.textX,this.scoreRenderSetup.textY);
};


//---------------------------------------------------

/**
* @description Represents a Player
* @constructor
*/
var Player = function(){
    // initial position for the player
    this.initialPositions = {'x' : 200, 'y' : 400};
    
    // coordinates to be added to handle the user inputs
    this.offsets = {
        'left' : {'x' : -101, 'y' : 0},
        'up' : {'x' : 0, 'y' : -83},
        'right' : {'x' : 101, 'y' : 0},
        'down' : {'x' : 0, 'y' : 83},
    };
    
    // coordinate limits to check if the player is off bounds
    this.limits = {
        'leftX' : -83,
        'rightX' : 422,
        'topY' : 0,
        'bottomY' : 400
    }
    
    // collision range for the player
    this.collisionRange = {
        'x' : 80,
        'y' : 63
    };
    
    // initialize the postions before the game begins
    this.x = this.initialPositions.x;
    this.y = this.initialPositions.y;
    this.sprite = 'images/char-boy.png';
  
    this.prevMove = '';
  
    // add the score object to the player
    this.scoreObj = new PlayerScore();
  
    // add the level object to the player
    this.levelObj = new PlayerLevel();
    this.levelObj.initWithLevel(0);
};

// Move player to next level
Player.prototype.moveToNextLevel = function(){
  this.levelObj.level = this.levelObj.level + 1;
  this.levelObj.initWithLevel(this.levelObj.level);
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


//---------------------------------------------------

/**
* @description Represents a PlayerLevel
* @constructor
*/
var PlayerLevel = function(){
  // Intial level value
    this.level = 0;
    this.levelSetup = [{
      'numberOfEnemies' : 1,
      'numberOfBlueGems': 1,
      'numberOfGreenGems': 0,
      'numberOfOrangeGems': 0,
      'numberOfRocks': 0
    },
    {
      'numberOfEnemies' : 2,
      'numberOfBlueGems': 2,
      'numberOfGreenGems': 0,
      'numberOfOrangeGems': 0,
      'numberOfRocks': 1
    },
    {
      'numberOfEnemies' : 3,
      'numberOfBlueGems': 2,
      'numberOfGreenGems': 1,
      'numberOfOrangeGems': 0,
      'numberOfRocks': 1
    },
    {
      'numberOfEnemies' : 3,
      'numberOfBlueGems': 2,
      'numberOfGreenGems': 1,
      'numberOfOrangeGems': 1,
      'numberOfRocks': 1
    }];
  
    // Level setup values
    this.levelRenderSetup = {
      font: "30px Arial",
      text: "Level: ",
      canvasWidth: 253,
      canvasHeight: 101,
      textX: 380,
      textY: 50
    };
    this.allEnemies = [];
    this.allGameObjects = [];
    this.allRocks = [];
}

// Update the player score on the screen, required method for game
PlayerLevel.prototype.render = function(){
    scoreCtx.clearRect(252, 0, this.levelRenderSetup.canvasWidth, this.levelRenderSetup.canvasHeight);
    scoreCtx.font = this.levelRenderSetup.font;
    scoreCtx.fillText(this.levelRenderSetup.text + this.level,this.levelRenderSetup.textX,this.levelRenderSetup.textY);
    scoreCtx.fillText(this.levelRenderSetup.text + this.level,this.levelRenderSetup.textX,this.levelRenderSetup.textY);
};


// Instantiate all the objects for a particular level
PlayerLevel.prototype.initWithLevel = function(level){
  // Instantiating the objects.
  // All enemy objects are in an array called allEnemies
  // The player object in a variable called player
  
  level = level || 0;
  if(level > (this.levelSetup.length - 1 ))
      return;
  var levelSetupValues = this.levelSetup[level];
  
  var allEnemies = [];
  var numberOfEnemies = levelSetupValues.numberOfEnemies;
  for(var i = 0 ; i < numberOfEnemies; i++){
      allEnemies.push(new Enemy());
  }

  var allGameObjects = [];
  var numberOfGameObjects = {
    'blueGem': levelSetupValues.numberOfBlueGems,
    'greenGem': levelSetupValues.numberOfGreenGems,
    'orangeGem': levelSetupValues.numberOfOrangeGems,
    'rock': levelSetupValues.numberOfRocks
  };

  for (var k in numberOfGameObjects){
    if (numberOfGameObjects.hasOwnProperty(k)) {
      var j = numberOfGameObjects[k];
      while(j > 0){
          var _valid = true;
          var _gameObj = new GameObject(k);
          allGameObjects.forEach(function(gameObj){
            if((gameObj.rowNum == _gameObj.rowNum) && (gameObj.colNum == _gameObj.colNum)){
              _valid = false;
            }
          });
          if(_valid){
            allGameObjects.push(_gameObj);
            j--;
          }
      }
    }
  }
  this.allEnemies = allEnemies;
  this.allGameObjects = allGameObjects;
};

var player = new Player();

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

var allEnemies = player.levelObj.allEnemies;
var allGameObjects = player.levelObj.allGameObjects;

