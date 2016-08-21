/**
* @description Represents a PlayerScore
* @constructor
*/

var PlayerScore = function(_scoreValDict){
    // add score values
    this.score = 0;
    this.scoreRenderSetup = {
      font: "22px Arial",
      text: "Score: ",
      canvasWidth: 120,
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


