/**
* @description Represents a PlayerLife
* @constructor
*/

var PlayerLife = function(_lifeVal){
    this.life = _lifeVal || 0;
    this.lifeRenderSetup = {
      font: "22px Arial",
      text: "Lives: ",
      canvasWidth: 130,
      canvasHeight: 101,
      textX: 120,
      textY: 50
    };
};

// Update the score of the player
PlayerLife.prototype.updateLife = function(value){
    this.life += value;
    if(this.life == 0){
        gamePhase = 'end';
    }
};

// Update the player score on the screen, required method for game
PlayerLife.prototype.render = function(){
    scoreCtx.clearRect(120, 0, this.lifeRenderSetup.canvasWidth, this.lifeRenderSetup.canvasHeight);
    scoreCtx.font = this.lifeRenderSetup.font;
    scoreCtx.fillText(this.lifeRenderSetup.text + this.life,this.lifeRenderSetup.textX,this.lifeRenderSetup.textY);
    scoreCtx.fillText(this.lifeRenderSetup.text + this.life,this.lifeRenderSetup.textX,this.lifeRenderSetup.textY);
};


