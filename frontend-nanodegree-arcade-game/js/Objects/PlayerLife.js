/**
* @description Represents a PlayerLife
* @constructor
*/

var PlayerLife = function(_lifeVal){
    this.life = _lifeVal || 0;
    this.lifeRenderSetup = {
      font: "22px Arial",
      text: "Lives: ",
      canvasWidth: 180,
      canvasHeight: 101,
      textX: 220,
      textY: 50
    };
  
    this.x = 120;
    this.y = -45;
    this.sprite = 'images/Heart.png';

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
    scoreCtx.clearRect(120, 0, this.lifeRenderSetup.canvasWidth, this.lifeRenderSetup.canvasHeight);
    scoreCtx.font = this.lifeRenderSetup.font;
    scoreCtx.fillText(this.lifeRenderSetup.text + this.life,this.lifeRenderSetup.textX,this.lifeRenderSetup.textY);
    scoreCtx.fillText(this.lifeRenderSetup.text + this.life,this.lifeRenderSetup.textX,this.lifeRenderSetup.textY);
    scoreCtx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


