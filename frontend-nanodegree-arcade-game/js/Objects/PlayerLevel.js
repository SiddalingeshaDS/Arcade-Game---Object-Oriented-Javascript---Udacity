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
      font: "22px Arial",
      text: "Level: ",
      canvasWidth: 253,
      canvasHeight: 101,
      textX: 380,
      textY: 50
    };
    this.allEnemies = [];
    this.allGameObjects = [];
    this.allRocks = [];
    this.x = 280;
    this.y = -60;
    this.sprite = 'images/Star.png';
}

// Update the player score on the screen, required method for game
PlayerLevel.prototype.render = function(){
    scoreCtx.clearRect(252, 0, this.levelRenderSetup.canvasWidth, this.levelRenderSetup.canvasHeight);
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

