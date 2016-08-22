/**
* @description Represents a PlayerScore
* @constructor
*/

var PlayerScore = function(){
    if(!CONSTANTS){
      return;
    }
    // add score values
    this.score = CONSTANTS.PLAYER_SCORE.INITIAL_SCORE;
    this.scoreRenderSetup = {
      font: CONSTANTS.PLAYER_SCORE.SCORE_RENDER_SETUP.FONT,
      text: CONSTANTS.PLAYER_SCORE.SCORE_RENDER_SETUP.TEXT,
      canvasWidth: CONSTANTS.PLAYER_SCORE.SCORE_RENDER_SETUP.CANVAS_WIDTH,
      canvasHeight: CONSTANTS.PLAYER_SCORE.SCORE_RENDER_SETUP.CANVAS_HEIGHT,
      textX: CONSTANTS.PLAYER_SCORE.SCORE_RENDER_SETUP.TEXT_X,
      textY: CONSTANTS.PLAYER_SCORE.SCORE_RENDER_SETUP.TEXT_Y
    };
//    _scoreValDict = _scoreValDict || {};
    this.scoreValDict = CONSTANTS.PLAYER_SCORE.DEFAULT_SCORE_VALUES;
//    {
//      finish: _scoreValDict.finish || ,
//      star: _scoreValDict.star || CONSTANTS.PLAYER_SCORE.DEFAULT_SCORE_VALUES.STAR,
//      blueGem: _scoreValDict.blueGem || CONSTANTS.PLAYER_SCORE.DEFAULT_SCORE_VALUES.BLUE_GEM,
//      greenGem: _scoreValDict.greenGem || CONSTANTS.PLAYER_SCORE.DEFAULT_SCORE_VALUES.GREEN_GEM,
//      orangeGem: _scoreValDict.orangeGem || CONSTANTS.PLAYER_SCORE.DEFAULT_SCORE_VALUES.ORANGE_GEM,
//      collision: _scoreValDict.collision || CONSTANTS.PLAYER_SCORE.DEFAULT_SCORE_VALUES.COLLISION,
//      offBound: _scoreValDict.offBound || CONSTANTS.PLAYER_SCORE.DEFAULT_SCORE_VALUES.OFF_BOUND,
//      rock: _scoreValDict.rock || CONSTANTS.PLAYER_SCORE.DEFAULT_SCORE_VALUES.ROCK
//    };
};

// Update the score of the player
PlayerScore.prototype.updateScore = function(value){
    this.score = this.score + value;
};

// Update the player score on the screen, required method for game
PlayerScore.prototype.render = function(){
    scoreCtx.clearRect(CONSTANTS.PLAYER_SCORE.CANVAS_RECT_X, CONSTANTS.PLAYER_SCORE.CANVAS_RECT_Y, this.scoreRenderSetup.canvasWidth, this.scoreRenderSetup.canvasHeight);
    scoreCtx.font = this.scoreRenderSetup.font;
    scoreCtx.fillText(this.scoreRenderSetup.text + this.score,this.scoreRenderSetup.textX,this.scoreRenderSetup.textY);
    scoreCtx.fillText(this.scoreRenderSetup.text + this.score,this.scoreRenderSetup.textX,this.scoreRenderSetup.textY);
};


