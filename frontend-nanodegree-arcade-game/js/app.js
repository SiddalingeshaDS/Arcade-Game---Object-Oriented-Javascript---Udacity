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
* @description Represents a Gem
* @constructor
*/

var Gem = function(_gemType){
      // coordinates to be added to handle the user inputs
    this.hideOffsets = {
        'topX' : -101,
        'topY' : -83,
    };
    // Default to Blue Gem
    this.gemType = _gemType || 'blueGem';
    _spriteDict = {
      'blueGem' : 'images/Gem Blue.png',
      'greenGem' : 'images/Gem Green.png',
      'orangeGem' : 'images/Gem Orange.png'
    };
    this.sprite = _spriteDict[this.gemType];
      // Initial variables to hold the size and step of the enemy positions
    var _xOffset = 0;
    var _yOffset = 60;
    var _rowHeight = 83; // rowHeight of the blocks where the enemies can be placed
    var _rowWidth = 101; // rowHeight of the blocks where the enemies can be placed

    // Random initialization of the x and y value to be placed anywhere on the three block paths
    this.rowNum = (Math.floor(5 * Math.random(Date.now())));
    this.colNum = (Math.floor(3 * Math.random(Date.now())));
    this.x = _xOffset + ( _rowWidth * this.rowNum);
    this.y = _yOffset + ( _rowHeight * this.colNum);
}

// Draw the gem on the screen, required method for game
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Remove the gem from the screen, required method for game
Gem.prototype.remove = function() {
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
    this.scoreSetup = {
      font: "30px Arial",
      text: "Score: ",
      canvasWidth: 505,
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
      offBound: _scoreValDict.offBound || -1
    };
  
};

// Update the score of the player
PlayerScore.prototype.updateScore = function(value){
    this.score = this.score + value;
};

// Update the player score on the screen, required method for game
PlayerScore.prototype.render = function(){
    scoreCtx.clearRect(0, 0, this.scoreSetup.canvasWidth, this.scoreSetup.canvasHeight);
    scoreCtx.font = this.scoreSetup.font;
    scoreCtx.fillText(this.scoreSetup.text + this.score,this.scoreSetup.textX,this.scoreSetup.textY);
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
  
    // add the score object to the player
    this.scoreObj = new PlayerScore();
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
    allGems.forEach(function(gem){
        if((((gem.x + self.collisionRange.x >= self.x) && (gem.x  - self.x < self.collisionRange.x)) ) && ((self.y >= gem.y) && (self.y - gem.y < self.collisionRange.y))){
            self.scoreObj.updateScore(self.scoreObj.scoreValDict[gem.gemType]);
            gem.remove();
        }
    });
};

// Draw the player on the screen, required method for game
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
        this.reset();
    }
    this.render();
};

// Check the limits and reset the values if the player is off bounds
Player.prototype.checkLimits = function(keyCode){
    var _tempX = this.x + this.offsets[keyCode].x;
    var _tempY = this.y + this.offsets[keyCode].y;
    if(_tempX < this.limits.leftX || _tempX > this.limits.rightX || _tempY < this.limits.topY || _tempY > this.limits.bottomY){
       if(_tempY <= this.limits.topY){
          this.scoreObj.updateScore(this.scoreObj.scoreValDict.finish);
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

// Instantiating the objects.
// All enemy objects are in an array called allEnemies
// The player object in a variable called player

var allEnemies = [];
// Number of enemies : 4
var numberOfEnemies = 4;
for(var i = 0 ; i < numberOfEnemies; i++){
    allEnemies.push(new Enemy());
}

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

var allGems = [];
// Number of Blue Gems: 2
// Number of Green Gems: 1
// Number of Orange Gems: 1

var numberOfBlueGems = 2;
var numberOfGreenGems = 1;
var numberOfOrangeGems = 1;

var j = numberOfBlueGems; 
while(j > 0){
    var _valid = true;
    var _gem = new Gem('blueGem');
    allGems.forEach(function(gem){
      if((gem.rowNum == _gem.rowNum) && (gem.colNum == _gem.colNum)){
        _valid = false;
      }
    });
    if(_valid){
      allGems.push(_gem);
      j--;
    }
}

j = numberOfGreenGems; 
while(j > 0){
    var _valid = true;
    var _gem = new Gem('greenGem');
    allGems.forEach(function(gem){
      if((gem.rowNum == _gem.rowNum) && (gem.colNum == _gem.colNum)){
        _valid = false;
      }
    });
    if(_valid){
      allGems.push(_gem);
      j--;
    }
}

j = numberOfOrangeGems; 
while(j > 0){
    var _valid = true;
    var _gem = new Gem('orangeGem');
    allGems.forEach(function(gem){
      if((gem.rowNum == _gem.rowNum) && (gem.colNum == _gem.colNum)){
        _valid = false;
      }
    });
    if(_valid){
      allGems.push(_gem);
      j--;
    }
}
