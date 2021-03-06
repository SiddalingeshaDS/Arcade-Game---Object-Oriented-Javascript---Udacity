/**
* @description Represents a GameObject that will be drawn on the path => Gems, Rock, etc
* @constructor
*/

var GameObject = function(_objType){
  
    // get the constant values for the game object
    this.CONSTANTS = CONSTANT_FUNCTION('GAME_OBJECTS');
      // coordinates to be added to handle the user inputs
    this.hideOffsets = {
        'topX' : this.CONSTANTS.HIDE_OFFSETS.TOP_X,
        'topY' : this.CONSTANTS.HIDE_OFFSETS.TOP_Y,
    };
    // Default to Blue Gem
    this.objType = _objType || this.CONSTANTS.DEFAULT_OBJ_TYPE;
  
    var _spriteDict = this.CONSTANTS.SPRITE_DICT;
  
    this.sprite = _spriteDict[this.objType];
      // Initial variables to hold the size and step of the game object positions
    var _xOffset = this.CONSTANTS.X_INITIAL_OFFSET;
    var _yOffset = this.CONSTANTS.Y_INITIAL_OFFSET;
    var _rowHeight = this.CONSTANTS.ROW_HEIGHT; // rowHeight of the blocks where the game objects can be placed
    var _colWidth = this.CONSTANTS.COL_WIDTH; // rowWidth of the blocks where the game objects can be placed

    // Random initialization of the x and y value to be placed anywhere on the three block paths
    this.colNum = (Math.floor(this.CONSTANTS.NUMBER_OF_COLS * Math.random(Date.now())));
    this.rowNum = (Math.floor(this.CONSTANTS.NUMBER_OF_ROWS * Math.random(Date.now())));
    this.x = _xOffset + ( _colWidth * this.colNum);
    this.y = _yOffset + ( _rowHeight * this.rowNum);
}

// Draw the game object on the screen, required method for game
GameObject.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Remove the game obj from the screen, required method for game
GameObject.prototype.remove = function() {
  this.x = this.hideOffsets.topX;
  this.y = this.hideOffsets.topY;
};
