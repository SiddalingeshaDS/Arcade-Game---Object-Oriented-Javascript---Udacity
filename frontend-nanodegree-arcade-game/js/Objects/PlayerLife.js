/**
* @description Represents a PlayerLife
* @constructor
*/

var PlayerLife = function(_lifeVal){

    // get the constant values for the player life
    this.CONSTANTS = CONSTANT_FUNCTION('PLAYER_LIFE');
  
    this.life = _lifeVal || this.CONSTANTS.INITIAL_LIFE;
    this.lifeRenderSetup = {
      font: this.CONSTANTS.LIFE_RENDER_SETUP.FONT,
      text: this.CONSTANTS.LIFE_RENDER_SETUP.TEXT,
      canvasWidth: this.CONSTANTS.LIFE_RENDER_SETUP.CANVAS_WIDTH,
      canvasHeight: this.CONSTANTS.LIFE_RENDER_SETUP.CANVAS_HEIGHT,
      textX: this.CONSTANTS.LIFE_RENDER_SETUP.TEXT_X,
      textY: this.CONSTANTS.LIFE_RENDER_SETUP.TEXT_Y
    };
  
    this.x = this.CONSTANTS.SPRITE_X;
    this.y = this.CONSTANTS.SPRITE_Y;
    this.sprite = this.CONSTANTS.SPRITE_IMG;

};

// Update the life of the player
PlayerLife.prototype.updateLife = function(value){
    this.life += value;
    if(this.life == 0){
        gamePhase = 'end';
    }
};

// Update the player life on the screen, required method for game
PlayerLife.prototype.render = function(){
    scoreCtx.clearRect(this.CONSTANTS.CANVAS_RECT_X, this.CONSTANTS.CANVAS_RECT_Y, this.lifeRenderSetup.canvasWidth, this.lifeRenderSetup.canvasHeight);
    scoreCtx.font = this.lifeRenderSetup.font;
    scoreCtx.fillText(this.lifeRenderSetup.text + this.life,this.lifeRenderSetup.textX,this.lifeRenderSetup.textY);
    scoreCtx.fillText(this.lifeRenderSetup.text + this.life,this.lifeRenderSetup.textX,this.lifeRenderSetup.textY);
    scoreCtx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


