// Enemies our player must avoid
/**
* @description Represents an Enemy
* @constructor
*/
var Enemy = function() {
  if(!CONSTANTS){
    return;
  }
    // width of the canvas used to restart the enemy flow
    this.widthOfCanvas = CONSTANTS.ENEMY.CANVAS_WIDTH;
    // used to set the speed of the enemy
    var minSpeed = CONSTANTS.ENEMY.MIN_SPEED;
    var speedVariation = CONSTANTS.ENEMY.SPEED_VARIATION;
    this.randomSpeedRatio =  minSpeed + Math.floor(speedVariation * Math.random(Date.now));
    
    // Initial variables to hold the size and step of the enemy positions
    var _xOffset = CONSTANTS.ENEMY.X_INITIAL_OFFSET;
    var _yOffset = CONSTANTS.ENEMY.Y_INITIAL_OFFSET;
    var _rowHeight = CONSTANTS.ENEMY.ROW_HEIGHT; // rowHeight of the blocks where the enemies can be placed
    
    // Random initialization of the y value to start anywhere on the three block paths
    this.x = _xOffset;
    this.y = _yOffset + ( _rowHeight * (Math.floor(CONSTANTS.ENEMY.NUMBER_OF_PATHS * Math.random(Date.now()))));

    this.sprite = CONSTANTS.ENEMY.SPRITE_IMG;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Update the values of x until width of canvas, and then restart
    if((this.x + (this.randomSpeedRatio * dt)) < this.widthOfCanvas){
        this.x += (this.randomSpeedRatio * dt);
    }else{
        this.x = CONSTANTS.ENEMY.X_INITIAL_OFFSET;
    }
    this.render();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

