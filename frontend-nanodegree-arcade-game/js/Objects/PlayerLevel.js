/**
* @description Represents a PlayerLevel
* @constructor
*/
var PlayerLevel = function(){
  if(!CONSTANTS){
    return;
  }
  // Intial level value
    this.level = CONSTANTS.PLAYER_LEVEL.INITIAL_LEVEL;
    this.levelSetup = CONSTANTS.PLAYER_LEVEL.LEVEL_SETUP;
  
    // Level setup values
    this.levelRenderSetup = {
      font: CONSTANTS.PLAYER_LEVEL.LEVEL_RENDER_SETUP.FONT,
      text: CONSTANTS.PLAYER_LEVEL.LEVEL_RENDER_SETUP.TEXT,
      canvasWidth: CONSTANTS.PLAYER_LEVEL.LEVEL_RENDER_SETUP.CANVAS_WIDTH,
      canvasHeight: CONSTANTS.PLAYER_LEVEL.LEVEL_RENDER_SETUP.CANVAS_HEIGHT,
      textX: CONSTANTS.PLAYER_LEVEL.LEVEL_RENDER_SETUP.TEXT_X,
      textY: CONSTANTS.PLAYER_LEVEL.LEVEL_RENDER_SETUP.TEXT_Y
    };
  
    this.allEnemies = [];
    this.allGameObjects = [];
    this.allRocks = [];
    this.x = CONSTANTS.PLAYER_LEVEL.SPRITE_X;
    this.y = CONSTANTS.PLAYER_LEVEL.SPRITE_Y;
    this.sprite = CONSTANTS.PLAYER_LEVEL.SPRITE_IMG;
}

// Update the player score on the screen, required method for game
PlayerLevel.prototype.render = function(){
    scoreCtx.clearRect(CONSTANTS.PLAYER_LEVEL.CANVAS_RECT_X, CONSTANTS.PLAYER_LEVEL.CANVAS_RECT_Y, this.levelRenderSetup.canvasWidth, this.levelRenderSetup.canvasHeight);
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

