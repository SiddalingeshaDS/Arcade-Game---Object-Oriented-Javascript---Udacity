/**
* @description Represents a PlayerLevel
* @constructor
*/
var PlayerLevel = function(){
  
    // get the constant values for the player level
    this.CONSTANTS = CONSTANT_FUNCTION('PLAYER_LEVEL');
  
    // Intial level value
    this.level = this.CONSTANTS.INITIAL_LEVEL;
    this.levelSetup = this.CONSTANTS.LEVEL_SETUP;
  
    // Level setup values
    this.levelRenderSetup = {
      font: this.CONSTANTS.LEVEL_RENDER_SETUP.FONT,
      text: this.CONSTANTS.LEVEL_RENDER_SETUP.TEXT,
      canvasWidth: this.CONSTANTS.LEVEL_RENDER_SETUP.CANVAS_WIDTH,
      canvasHeight: this.CONSTANTS.LEVEL_RENDER_SETUP.CANVAS_HEIGHT,
      textX: this.CONSTANTS.LEVEL_RENDER_SETUP.TEXT_X,
      textY: this.CONSTANTS.LEVEL_RENDER_SETUP.TEXT_Y
    };
  
    this.allEnemies = [];
    this.allGameObjects = [];
    this.allRocks = [];
    this.x = this.CONSTANTS.SPRITE_X;
    this.y = this.CONSTANTS.SPRITE_Y;
    this.sprite = this.CONSTANTS.SPRITE_IMG;
}

// Update the player score on the screen, required method for game
PlayerLevel.prototype.render = function(){
    scoreCtx.clearRect(this.CONSTANTS.CANVAS_RECT_X, this.CONSTANTS.CANVAS_RECT_Y, this.levelRenderSetup.canvasWidth, this.levelRenderSetup.canvasHeight);
    scoreCtx.font = this.levelRenderSetup.font;
    scoreCtx.fillText(this.levelRenderSetup.text + parseInt(this.level + 1),this.levelRenderSetup.textX,this.levelRenderSetup.textY);
    scoreCtx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


// Instantiate all the objects for a particular level
PlayerLevel.prototype.initWithLevel = function(level){
  // Instantiating the objects.
  // All enemy objects are in an array called allEnemies
  // The player object in a variable called player
  
  level = level || 0;
  if(level > (this.levelSetup.length - 1 )){
      gamePhase = 'end';
      return;
  }
  this.level = level;
  var levelSetupValues = this.levelSetup[level];
  
  var allEnemies = [];
  var numberOfEnemies = levelSetupValues.numberOfEnemies;
  for(var i = 0 ; i < numberOfEnemies; i++){
      allEnemies.push(new Enemy(levelSetupValues.enemyMinSpeed, levelSetupValues.enemySpeedVariation));
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

