// Enemies our player must avoid
/**
* @description Represents an Enemy
* @constructor
*/
var Enemy = function() {
  
    // get the constant values for the enemy
    this.CONSTANTS = CONSTANT_FUNCTION('ENEMY');

    // width of the canvas used to restart the enemy flow
    this.widthOfCanvas = this.CONSTANTS.CANVAS_WIDTH;
    // used to set the speed of the enemy
    var minSpeed = this.CONSTANTS.MIN_SPEED;
    var speedVariation = this.CONSTANTS.SPEED_VARIATION;
    this.randomSpeedRatio =  minSpeed + Math.floor(speedVariation * Math.random(Date.now));
    
    // Initial variables to hold the size and step of the enemy positions
    var _xOffset = this.CONSTANTS.X_INITIAL_OFFSET;
    var _yOffset = this.CONSTANTS.Y_INITIAL_OFFSET;
    var _rowHeight = this.CONSTANTS.ROW_HEIGHT; // rowHeight of the blocks where the enemies can be placed
    
    // Random initialization of the y value to start anywhere on the three block paths
    this.x = _xOffset;
    this.y = _yOffset + ( _rowHeight * (Math.floor(this.CONSTANTS.NUMBER_OF_PATHS * Math.random(Date.now()))));

    this.sprite = this.CONSTANTS.SPRITE_IMG;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Update the values of x until width of canvas, and then restart
    if((this.x + (this.randomSpeedRatio * dt)) < this.widthOfCanvas){
        this.x += (this.randomSpeedRatio * dt);
    }else{
        this.x = this.CONSTANTS.X_INITIAL_OFFSET;
    }
    this.render();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

