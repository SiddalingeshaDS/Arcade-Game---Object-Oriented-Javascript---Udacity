/**
* @description Represents a PlayerLife
* @constructor
*/

var PlayerLife = function(_lifeVal){
    if(!CONSTANTS){
      return;
    }
    this.life = _lifeVal || CONSTANTS.PLAYER_LIFE.INITIAL_LIFE;
    this.lifeRenderSetup = {
      font: CONSTANTS.PLAYER_LIFE.LIFE_RENDER_SETUP.FONT,
      text: CONSTANTS.PLAYER_LIFE.LIFE_RENDER_SETUP.TEXT,
      canvasWidth: CONSTANTS.PLAYER_LIFE.LIFE_RENDER_SETUP.CANVAS_WIDTH,
      canvasHeight: CONSTANTS.PLAYER_LIFE.LIFE_RENDER_SETUP.CANVAS_HEIGHT,
      textX: CONSTANTS.PLAYER_LIFE.LIFE_RENDER_SETUP.TEXT_X,
      textY: CONSTANTS.PLAYER_LIFE.LIFE_RENDER_SETUP.TEXT_Y
    };
  
    this.x = CONSTANTS.PLAYER_LIFE.SPRITE_X;
    this.y = CONSTANTS.PLAYER_LIFE.SPRITE_Y;
    this.sprite = CONSTANTS.PLAYER_LIFE.SPRITE_IMG;

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
    scoreCtx.clearRect(CONSTANTS.PLAYER_LIFE.CANVAS_RECT_X, CONSTANTS.PLAYER_LIFE.CANVAS_RECT_Y, this.lifeRenderSetup.canvasWidth, this.lifeRenderSetup.canvasHeight);
    scoreCtx.font = this.lifeRenderSetup.font;
    scoreCtx.fillText(this.lifeRenderSetup.text + this.life,this.lifeRenderSetup.textX,this.lifeRenderSetup.textY);
    scoreCtx.fillText(this.lifeRenderSetup.text + this.life,this.lifeRenderSetup.textX,this.lifeRenderSetup.textY);
    scoreCtx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


