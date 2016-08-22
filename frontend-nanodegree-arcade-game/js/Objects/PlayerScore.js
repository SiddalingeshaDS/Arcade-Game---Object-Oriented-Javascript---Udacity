/**
* @description Represents a PlayerScore
* @constructor
*/

var PlayerScore = function(){
  
    // get the constant values for the player score
    this.CONSTANTS = CONSTANT_FUNCTION('PLAYER_SCORE');

    // add score values
    this.score = this.CONSTANTS.INITIAL_SCORE;
    this.scoreRenderSetup = {
      font: this.CONSTANTS.SCORE_RENDER_SETUP.FONT,
      text: this.CONSTANTS.SCORE_RENDER_SETUP.TEXT,
      canvasWidth: this.CONSTANTS.SCORE_RENDER_SETUP.CANVAS_WIDTH,
      canvasHeight: this.CONSTANTS.SCORE_RENDER_SETUP.CANVAS_HEIGHT,
      textX: this.CONSTANTS.SCORE_RENDER_SETUP.TEXT_X,
      textY: this.CONSTANTS.SCORE_RENDER_SETUP.TEXT_Y
    };
    this.scoreValDict = this.CONSTANTS.DEFAULT_SCORE_VALUES;
};

// Update the score of the player
PlayerScore.prototype.updateScore = function(value){
    this.score = this.score + value;
};

// Update the player score on the screen, required method for game
PlayerScore.prototype.render = function(){
    scoreCtx.clearRect(this.CONSTANTS.CANVAS_RECT_X, this.CONSTANTS.CANVAS_RECT_Y, this.scoreRenderSetup.canvasWidth, this.scoreRenderSetup.canvasHeight);
    scoreCtx.font = this.scoreRenderSetup.font;
    scoreCtx.fillText(this.scoreRenderSetup.text + this.score,this.scoreRenderSetup.textX,this.scoreRenderSetup.textY);
    scoreCtx.fillText(this.scoreRenderSetup.text + this.score,this.scoreRenderSetup.textX,this.scoreRenderSetup.textY);
};


